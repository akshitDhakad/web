import { Clock, Mail } from "lucide-react";
import Image from "next/image";

import { containerClassName } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface HeaderTopProps {
  variant?: "light" | "dark";
}

export function HeaderTop({ variant = "light" }: HeaderTopProps) {
  const isDark = variant === "dark";

  return (
    <div className={cn("header-top py-2", isDark ? "header-top-dark" : "bg_white")}>
      <div className={containerClassName}>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="header-info-left">
            <div className="language-list">
              <select
                id="select-lang"
                className="border-0 bg-transparent text-sm"
                defaultValue="English"
                aria-label="Select language"
              >
                <option value="English">English</option>
                <option value="Bangla">Bangla</option>
                <option value="French">French</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div className="timestamp ms-4 flex items-center gap-1">
              <Clock aria-hidden size={14} />
              Mon - Fri 10:00-18:00
            </div>
          </div>
          <div className="header-info-right">
            <ul>
              <li>
                <Image
                  className="img-fluid"
                  src={isDark ? "/img/phone-outline-white.png" : "/img/phone-outline.png"}
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden
                />
                <a href="tel:01234567890">+01234-567890</a>
              </li>
              <li>
                <Mail aria-hidden size={14} />
                <a href="mailto:bancainfo@email.com">bancainfo@email.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
