import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import {
  FOOTER_LINK_GROUPS,
  SITE_FOOTER_SOCIAL,
  SITE_FOOTER_SOCIAL_ICON_CLASS,
} from "@/features/home/constants/footer";
import { footerLink } from "@/lib/footer-links";

export function Footer() {
  return (
    <footer className="footer footer-3 site-footer">
      <div className="footer-top pt-105 pb-105 lg:pt-130 lg:pb-115">
        <div className="container">
          <div className="footer-top-grid">
            <FadeIn direction="left">
              <div className="footer-widget mb-30">
                <div className="footer-text mb-20">
                  <p>
                    Banca is a leading bank in the worldzone and a prominent international banking
                    institution
                  </p>
                </div>
                <span className="overline">COTATION</span>
                <div className="footer-bold">
                  <span className="counter">
                    $<span>35.105</span>
                  </span>
                  <span className="counter">
                    -<span>0.46</span>%
                  </span>
                </div>
                <p className="time">2021-01-05 14:00 (INTERNATIONAL TIME)</p>
              </div>
            </FadeIn>

            <div className="footer-links-group">
              {FOOTER_LINK_GROUPS.map((group, index) => (
                <FadeIn key={group.title} delay={0.1 + index * 0.2}>
                  <div className="footer-widget mb-30 text-center text-sm-start">
                    <div className="f-widget-title">
                      <h5>{group.title}</h5>
                    </div>
                    <div className="footer-link">
                      <ul>
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link href={footerLink(link.label)}>{link.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="copyright pt-25 pb-25">
        <div className="container">
          <div className="sf-footer-copyright-row">
            <div className="text-center text-lg-start">
              <Link href="/" className="m-0 inline-block p-0">
                <Image src="/img/logo/Logo.png" alt="Banca logo" width={120} height={40} />
              </Link>
            </div>
            <div className="copyright-text text-center my-3 my-sm-0">
              <p>
                Copyright&copy; Banca 2023.
                <br className="d-sm-none" />{" "}
                <Link className="ms-2" href={footerLink("Privecy")}>
                  Privecy
                </Link>{" "}
                |{" "}
                <Link className="ms-0" href={footerLink("Term of Use")}>
                  Term of Use
                </Link>
              </p>
            </div>
            <div className="social-button text-center text-end">
              {SITE_FOOTER_SOCIAL.map((network) => (
                <a key={network} href="#" aria-label={network}>
                  <i className={SITE_FOOTER_SOCIAL_ICON_CLASS[network]} aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
