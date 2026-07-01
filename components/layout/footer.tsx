import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { FOOTER_LINK_GROUPS, FOOTER_SOCIAL_LINKS } from "@/features/home/constants/footer";

function SocialIcon({ icon }: { icon: string }) {
  const className = "text-sm font-semibold";
  switch (icon) {
    case "facebook":
      return <span className={className} aria-hidden>f</span>;
    case "twitter":
      return <span className={className} aria-hidden>X</span>;
    case "pinterest":
      return <span className={className} aria-hidden>P</span>;
    case "linkedin":
      return <span className={className} aria-hidden>in</span>;
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="footer footer-3">
      <div className="footer-top pt-200 pb-120 pb-lg-115">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div className="grid grid-cols-1 gap-8 pt-60 sm:grid-cols-2 lg:grid-cols-12">
            <div className="text-center sm:text-start lg:col-span-4">
              <FadeIn direction="right">
                <div className="footer-widget mb-30">
                  <div className="footer-text mb-20">
                    <p>
                      Banca is a leading bank in the worldzone and a prominent international
                      banking institution
                    </p>
                  </div>
                  <span className="overline">COTATION</span>
                  <div className="footer-bold">
                    <span>
                      $<span>35.105</span>
                    </span>
                    <span>
                      -<span>0.46</span>%
                    </span>
                  </div>
                  <p className="time">2021-01-05 14:00 (INTERNATIONAL TIME)</p>
                </div>
              </FadeIn>
            </div>

            {FOOTER_LINK_GROUPS.map((group, index) => (
              <div
                key={group.title}
                className="text-center sm:text-start lg:col-span-2 lg:col-start-auto"
              >
                <FadeIn delay={0.1 + index * 0.2}>
                  <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                      <h5>{group.title}</h5>
                    </div>
                    <div className="footer-link">
                      <ul>
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href}>{link.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="copyright pt-25 pb-25">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-start">
              <Link href="/">
                <Image
                  src="/img/logo/Logo.png"
                  alt="Banca logo"
                  width={120}
                  height={40}
                  className="h-auto w-auto"
                />
              </Link>
            </div>
            <div className="copyright-text text-center">
              <p>
                Copyright&copy; Banca 2023.{" "}
                <Link className="ms-2" href="#">
                  Privecy
                </Link>{" "}
                |{" "}
                <Link className="ms-0" href="#">
                  Term of Use
                </Link>
              </p>
            </div>
            <div className="social-button text-center lg:text-end">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
