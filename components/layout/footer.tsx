import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import {
  SITE_FOOTER_COMPANY_LINKS,
  SITE_FOOTER_HELP_LINKS,
  SITE_FOOTER_PRODUCT_LINKS,
  SITE_FOOTER_SOCIAL,
  SITE_FOOTER_SOCIAL_ICON_CLASS,
} from "@/features/home/constants/footer";
import { footerLink } from "@/lib/footer-links";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      className="footer footer-2 site-footer"
      style={{ backgroundImage: "url(/img/footer/footer-bg-2.png)" }}
    >
      <div className="footer-top">
        <div className="container">
          <div className="sf-footer-grid">
            <div className="sf-footer-col-mission text-center text-sm-start">
              <FadeIn direction="right">
                <div className="footer-widget">
                  <h4>We&apos;re on a mission.</h4>
                  <div className="footer-text">
                    <p>
                      At Banca, we&apos;re using cutting-edge technology to transform the industry
                      and deliver financial services that actually work for you.
                    </p>
                  </div>
                  <div className="truspilot">
                    <Image
                      src="/img/footer/Trustpilot.png"
                      alt="Trustpilot"
                      width={120}
                      height={40}
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="sf-footer-col-company text-center text-sm-start">
              <FadeIn delay={0.1}>
                <div className="footer-widget">
                  <div className="f-widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      {SITE_FOOTER_COMPANY_LINKS.map((label) => (
                        <li key={label}>
                          <Link href={footerLink(label)}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="sf-footer-col-product text-center text-sm-start">
              <FadeIn delay={0.3}>
                <div className="footer-widget">
                  <div className="f-widget-title">
                    <h5>product</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      {SITE_FOOTER_PRODUCT_LINKS.map((label) => (
                        <li key={label}>
                          <Link href={footerLink(label)}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="sf-footer-col-help text-center text-sm-start">
              <FadeIn delay={0.5}>
                <div className="footer-widget">
                  <div className="f-widget-title">
                    <h5>Help</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      {SITE_FOOTER_HELP_LINKS.map((label) => (
                        <li key={label}>
                          <Link href={footerLink(label)}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="sf-copyright-grid">
            <div className="sf-copyright-inner">
              <div className="sf-copyright-bar">
                <div className="text-center text-md-start">
                  <Link href="/">
                    <Image src="/img/logo/Logo.png" alt="Banca logo" width={100} height={35} />
                  </Link>
                </div>
                <div>
                  <div className="line" />
                </div>
                <div>
                  <div className="social-button text-center">
                    {SITE_FOOTER_SOCIAL.map((network, index) => (
                      <a
                        key={network}
                        href="#"
                        className={cn(
                          index === 0 && "ms-0",
                          index === SITE_FOOTER_SOCIAL.length - 1 && "me-0",
                        )}
                        aria-label={network}
                      >
                        <i className={SITE_FOOTER_SOCIAL_ICON_CLASS[network]} aria-hidden />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="copyright-text text-center text-md-start">
                <p>
                  Copyright&copy; Banca 2023.
                  <br className="d-sm-none" />{" "}
                  <Link className="ms-3" href={footerLink("Privecy")}>
                    Privecy
                  </Link>{" "}
                  |{" "}
                  <Link className="ms-0" href={footerLink("Term of Use")}>
                    Term of Use
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
