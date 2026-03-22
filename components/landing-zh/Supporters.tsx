import { content } from "@/lib/content-zh";

export function Supporters() {
  const s = content.supporters;

  return (
    <section className="pt-0 pb-8 md:pb-12 px-6 bg-white">
      <div className="max-w-[1120px] mx-auto text-center">
        <p className="text-sm text-gray-500 mb-3">{s.heading}</p>
        <p className="text-base font-semibold text-gray-900">
          {s.institutions.join(" · ")}
        </p>
      </div>
    </section>
  );
}
