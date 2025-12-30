import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0b1220] via-[#0e1a2f] to-[#0a0f1c] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              The <span className="text-teal-400">Proxima</span>
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
            <FooterLink text="Home" />
            <FooterLink text="About Us" />
            <FooterLink text="Services" />
            <FooterLink text="Gallery" />
            <FooterLink text="Upcoming Events" />
            <FooterLink text="Sponsors" />
            <FooterLink text="Contact" />
          </FooterColumn>

          {/* Policies */}
          <FooterColumn title="Policies">
            <FooterLink text="Terms & Conditions" />
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Return Policy" />
            <FooterLink text="Cookie Policy" />
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

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <a
        href="#"
        className="text-sm text-gray-400 transition hover:text-teal-400"
      >
        {text}
      </a>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-gray-300 transition hover:border-teal-400 hover:text-teal-400"
    >
      {icon}
    </a>
  );
}
