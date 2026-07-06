"use client";

import { Moon, Sun, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import { containerClassName } from "@/components/layout/container";
import { HeaderTop } from "@/components/layout/header-top";
import {
  BUY_BANCA_URL,
  getHeaderTopVariant,
  MAIN_NAV_ITEMS,
  showsHeaderTop,
  type NavChild,
} from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/ui-store";

function isNavItemActive(pathname: string, href?: string): boolean {
  if (!href) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/blog") {
    return pathname === "/blog";
  }

  if (href === "/blog/details") {
    return pathname.startsWith("/blog/") && pathname !== "/blog";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavDropdownItem({
  item,
  parentKey,
  pathname,
}: {
  item: NavChild;
  parentKey: string;
  pathname: string;
}) {
  const { openMobileDropdown, toggleMobileDropdown } = useUIStore();
  const hasChildren = item.children && item.children.length > 0;
  const itemKey = `${parentKey}-${item.label}`;
  const isActive = isNavItemActive(pathname, item.href);

  if (hasChildren) {
    return (
      <li className={cn("nav-item submenu-nested", openMobileDropdown === itemKey && "open")}>
        <button
          type="button"
          className="nav-link w-full text-start"
          onClick={() => toggleMobileDropdown(itemKey)}
          aria-expanded={openMobileDropdown === itemKey}
        >
          {item.label}
          <ChevronDown className="mobile_dropdown_icon lg:hidden" aria-hidden />
        </button>
        <ul className="dropdown-menu">
          {item.children?.map((child) => (
            <li key={child.label} className="nav-item">
              <Link
                href={child.href}
                className={cn("nav-link", isNavItemActive(pathname, child.href) && "active")}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <Link href={item.href} className={cn("nav-link", isActive && "active")}>
        {item.label}
      </Link>
    </li>
  );
}

function DarkModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const inputId = "banca-dark-mode-switcher";

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="js-darkmode-btn" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={cn("js-darkmode-btn", isDark && "dark-active")}
      title="Toggle dark mode"
    >
      <label htmlFor={inputId} className="tab-btn tab-btns" aria-label="Switch to dark mode">
        <Moon aria-hidden />
      </label>
      <label htmlFor={inputId} className="tab-btn" aria-label="Switch to light mode">
        <Sun aria-hidden />
      </label>
      <label className="ball" htmlFor={inputId} aria-hidden />
      <input
        type="checkbox"
        id={inputId}
        className="dark_mode_switcher"
        checked={isDark}
        onChange={(event) => setTheme(event.target.checked ? "dark" : "light")}
      />
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const hasHeaderTop = showsHeaderTop(pathname);
  const {
    isMobileMenuOpen,
    isNavbarFixed,
    openMobileDropdown,
    setMobileMenuOpen,
    setNavbarFixed,
    toggleMobileDropdown,
  } = useUIStore();

  const showSolidNav = !isHomePage || isNavbarFixed;
  const useFixedPosition = isNavbarFixed;

  const handleScroll = useCallback(() => {
    setNavbarFixed(window.scrollY > 80);
  }, [setNavbarFixed]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      {hasHeaderTop && <HeaderTop variant={getHeaderTopVariant(pathname)} />}
      <div
        className={cn(
          "header-menu header-menu-4",
          showSolidNav && "navbar-solid",
          useFixedPosition && "navbar_fixed",
        )}
        id="sticky"
      >
        <nav className="navbar navbar-expand-lg">
          <div className={cn(containerClassName, "flex flex-wrap items-center justify-between")}>
            <Link className="relative z-[100] sticky_logo" href="/">
              <Image
                className="main h-auto w-auto"
                src="/img/logo/Logo.png"
                alt="Banca logo"
                width={120}
                height={40}
                priority
              />
              <Image
                className="sticky h-auto w-auto"
                src="/img/logo/Logo-2.png"
                alt="Banca logo"
                width={120}
                height={40}
                priority
              />
            </Link>

            <button
              className={cn("navbar-toggler lg:hidden", isMobileMenuOpen && "open")}
              type="button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="navbarSupportedContent"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="hamburger-cross">
                  <span />
                  <span />
                </span>
              </span>
            </button>

            <div
              className={cn(
                "navbar-collapse right-nav",
                isMobileMenuOpen && "show",
              )}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav menu ms-auto flex list-none flex-col lg:flex-row">
                {MAIN_NAV_ITEMS.map((item) => {
                  const isActive =
                    (item.href && isNavItemActive(pathname, item.href)) ||
                    item.children?.some((child) => isNavItemActive(pathname, child.href));

                  return (
                    <li
                      key={item.label}
                      className={cn(
                        "nav-item submenu",
                        openMobileDropdown === item.label && "open",
                      )}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          className={cn("nav-link dropdown-toggle", isActive && "active")}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className={cn("nav-link dropdown-toggle", isActive && "active")}
                          onClick={() => toggleMobileDropdown(item.label)}
                          aria-expanded={openMobileDropdown === item.label}
                        >
                          {item.label}
                        </button>
                      )}
                      <ChevronDown
                        className="mobile_dropdown_icon lg:hidden"
                        aria-hidden
                        onClick={() => toggleMobileDropdown(item.label)}
                      />
                      {item.children && (
                        <ul className="dropdown-menu">
                          {item.children.map((child) => (
                            <NavDropdownItem
                              key={child.label}
                              item={child}
                              parentKey={item.label}
                              pathname={pathname}
                            />
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              <a
                className="theme-btn theme-btn-rounded-2 theme-btn-alt"
                href={BUY_BANCA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Banca
              </a>

              <DarkModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
