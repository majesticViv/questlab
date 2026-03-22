import { content } from "@/lib/content";
import { assets } from "@/lib/assets";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-12 px-6"
      style={{ background: "var(--color-bg-deep)" }}
    >
      <div className="max-w-[1120px] mx-auto flex items-end justify-between relative z-10">
        <div className="flex flex-col gap-2 text-sm text-white/60">
          <a
            href={`mailto:${content.footer.email}`}
            className="hover:text-white transition-colors"
          >
            Contact Us
          </a>
          <p>{content.footer.copyright}</p>
        </div>
      </div>

      {/* Decorative image — bottom right */}
      {assets.footerCluster && (
        <img
          src={assets.footerCluster}
          alt=""
          className="absolute bottom-0 right-0 w-[200px] md:w-[280px] opacity-80 pointer-events-none"
        />
      )}
    </footer>
  );
}
