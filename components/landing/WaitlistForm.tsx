"use client";

import { useState, useEffect, FormEvent } from "react";
import { content } from "@/lib/content";
import { assets } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import type { WaitlistFormData } from "@/types/waitlist";

const c = content.waitlistForm;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function MoonLogo() {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {assets.heroPlanet ? (
        <img
          src={assets.heroPlanet}
          alt="QuestLab logo"
          className="w-10 h-10"
        />
      ) : (
        <div
          className="w-10 h-10 rounded-full shrink-0"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, var(--color-planet-highlight) 0%, var(--color-planet-base) 50%, var(--color-planet-shadow) 100%)",
          }}
        />
      )}
      <span className="text-white text-2xl font-bold tracking-tight">
        {content.hero.logoText}
      </span>
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-lg border bg-white/10 text-white placeholder:text-white/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-light focus:border-transparent ${
    hasError ? "border-error" : "border-white/20"
  }`;

const COUNTRY_CODES = [
  { code: "+1", country: "US", label: "US +1" },
  { code: "+1", country: "CA", label: "CA +1" },
  { code: "+44", country: "GB", label: "UK +44" },
  { code: "+86", country: "CN", label: "CN +86" },
  { code: "+91", country: "IN", label: "IN +91" },
  { code: "+81", country: "JP", label: "JP +81" },
  { code: "+82", country: "KR", label: "KR +82" },
  { code: "+49", country: "DE", label: "DE +49" },
  { code: "+33", country: "FR", label: "FR +33" },
  { code: "+61", country: "AU", label: "AU +61" },
  { code: "+55", country: "BR", label: "BR +55" },
  { code: "+52", country: "MX", label: "MX +52" },
  { code: "+234", country: "NG", label: "NG +234" },
  { code: "+27", country: "ZA", label: "ZA +27" },
  { code: "+971", country: "AE", label: "AE +971" },
  { code: "+65", country: "SG", label: "SG +65" },
  { code: "+852", country: "HK", label: "HK +852" },
  { code: "+886", country: "TW", label: "TW +886" },
  { code: "+64", country: "NZ", label: "NZ +64" },
  { code: "+39", country: "IT", label: "IT +39" },
  { code: "+34", country: "ES", label: "ES +34" },
  { code: "+31", country: "NL", label: "NL +31" },
  { code: "+46", country: "SE", label: "SE +46" },
  { code: "+47", country: "NO", label: "NO +47" },
  { code: "+45", country: "DK", label: "DK +45" },
  { code: "+41", country: "CH", label: "CH +41" },
  { code: "+48", country: "PL", label: "PL +48" },
  { code: "+63", country: "PH", label: "PH +63" },
  { code: "+62", country: "ID", label: "ID +62" },
  { code: "+60", country: "MY", label: "MY +60" },
  { code: "+66", country: "TH", label: "TH +66" },
  { code: "+84", country: "VN", label: "VN +84" },
  { code: "+7", country: "RU", label: "RU +7" },
  { code: "+90", country: "TR", label: "TR +90" },
  { code: "+20", country: "EG", label: "EG +20" },
  { code: "+972", country: "IL", label: "IL +972" },
  { code: "+92", country: "PK", label: "PK +92" },
  { code: "+880", country: "BD", label: "BD +880" },
  { code: "+94", country: "LK", label: "LK +94" },
  { code: "+254", country: "KE", label: "KE +254" },
];

function getDefaultCountryCode(countryCode: string): string {
  const match = COUNTRY_CODES.find((c) => c.country === countryCode);
  return match ? match.code : "+1";
}

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryDialCode, setCountryDialCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    role: "",
    organization: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof WaitlistFormData, string>>>({});
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    // Default to US; IP-based detection disabled for now
    setCountryDialCode("+1");
  }, []);

  function validate(): boolean {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = c.errors.nameRequired;
    if (!formData.email.trim()) {
      newErrors.email = c.errors.emailRequired;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = c.errors.emailInvalid;
    }
    if (!formData.role) newErrors.role = c.errors.roleRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    const phone = phoneNumber.trim()
      ? `${countryDialCode}${phoneNumber.trim()}`
      : undefined;

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone }),
      });

      if (res.status === 409) {
        setServerError(c.errors.duplicate);
        return;
      }
      if (!res.ok) {
        setServerError(c.errors.generic);
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError(c.errors.generic);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    const text = c.success;
    return (
      <section
        id="waitlist"
        className="py-20 md:py-28 px-6"
        style={{ background: "var(--color-bg-deep)" }}
      >
        <div className="max-w-[500px] mx-auto text-center">
          <MoonLogo />
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-success" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {text.heading}
          </h3>
          <p className="text-white/60">{text.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-20 md:py-28 px-6"
      style={{ background: "var(--color-bg-deep)" }}
    >
      <div className="max-w-[500px] mx-auto">
        <MoonLogo />

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold text-white mb-4">
            {c.heading}
          </h2>
          <p className="text-white/60">{c.subtext}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="waitlist-name" className="text-sm font-medium text-white/80">
              {c.fields.name.label}
            </label>
            <input
              id="waitlist-name"
              type="text"
              placeholder={c.fields.name.placeholder}
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              required
              className={inputClass(!!errors.name)}
            />
            {errors.name && <p className="text-sm text-error">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="waitlist-email" className="text-sm font-medium text-white/80">
              {c.fields.email.label}
            </label>
            <input
              id="waitlist-email"
              type="email"
              placeholder={c.fields.email.placeholder}
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              required
              className={inputClass(!!errors.email)}
            />
            {errors.email && <p className="text-sm text-error">{errors.email}</p>}
          </div>

          {/* Role */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="waitlist-role" className="text-sm font-medium text-white/80">
              {c.fields.role.label}
            </label>
            <select
              id="waitlist-role"
              value={formData.role}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  role: e.target.value as WaitlistFormData["role"],
                }))
              }
              required
              className={`${inputClass(!!errors.role)} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22white%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat`}
            >
              <option value="" disabled className="text-gray-900">
                {c.fields.role.placeholder}
              </option>
              {c.fields.role.options.map((opt) => (
                <option key={opt.value} value={opt.value} className="text-gray-900">
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.role && <p className="text-sm text-error">{errors.role}</p>}
          </div>

          {/* Organization */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="waitlist-org" className="text-sm font-medium text-white/80">
              {c.fields.organization.label}
            </label>
            <input
              id="waitlist-org"
              type="text"
              placeholder={c.fields.organization.placeholder}
              value={formData.organization ?? ""}
              onChange={(e) => setFormData((prev) => ({ ...prev, organization: e.target.value }))}
              className={inputClass(false)}
            />
          </div>

          {/* Phone (optional) */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="waitlist-phone" className="text-sm font-medium text-white/80">
              {c.fields.phone.label}
            </label>
            <div className="flex gap-2">
              <select
                id="waitlist-country-code"
                value={countryDialCode}
                onChange={(e) => setCountryDialCode(e.target.value)}
                aria-label="Country code"
                className={`w-[110px] shrink-0 px-3 py-3 rounded-lg border bg-white/10 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-light focus:border-transparent border-white/20 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22white%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1rem] bg-[right_0.5rem_center] bg-no-repeat text-sm`}
              >
                {COUNTRY_CODES.map((cc) => (
                  <option
                    key={`${cc.country}-${cc.code}`}
                    value={cc.code}
                    className="text-gray-900"
                  >
                    {cc.label}
                  </option>
                ))}
              </select>
              <input
                id="waitlist-phone"
                type="tel"
                placeholder={c.fields.phone.placeholder}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={inputClass(false)}
              />
            </div>
          </div>

          {serverError && (
            <p className="text-sm text-error text-center">{serverError}</p>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Submitting..." : c.submit}
          </Button>
        </form>
      </div>
    </section>
  );
}
