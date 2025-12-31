import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#0b1220] via-[#0e1a2f] to-[#0a0f1c] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              The <span className="text-blue-400">Proxima</span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              The Proxima organizes world-class scientific and technological
              conferences across the globe, fostering collaborations and
              empowering communities with knowledge and innovation.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <FooterLink text="Home" href="/" />
            <FooterLink text="About Us" href="/about" />
            <FooterLink text="Services" href="/services" />
            <FooterLink text="Gallery" href="/gallery" />
            <FooterLink text="Upcoming Events" href="/events" />
            <FooterLink text="Sponsors" href="/sponsors" />
            <FooterLink text="Contact" href="/contact" />
          </FooterColumn>

          {/* Policies */}
          <FooterColumn title="Policies">
            <FooterLink text="Terms & Conditions" href="/terms" />
            <FooterLink text="Privacy Policy" href="/privacy" />
            <FooterLink text="Return Policy" href="/return" />
          </FooterColumn>

          {/* Stay Connected */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Stay Connected
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Subscribe to our newsletter above for updates on upcoming
              conferences.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2025 The Proxima. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ---------------- Helper Components ---------------- */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-6 text-lg font-semibold text-white">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ text , href }: { text: string , href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-gray-400 transition hover:text-blue-400"
      >
        {text}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-gray-300 transition hover:border-blue-400 hover:text-blue-400"
    >
      {icon}
    </a>
  );
}
