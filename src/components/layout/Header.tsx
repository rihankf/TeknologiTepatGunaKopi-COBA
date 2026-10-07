/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang",
    href: "/tentang",
    dropdown: [
      { label: "Komoditas", href: "/tentang#komoditas" },
      { label: "Identifikasi", href: "/tentang#identifikasi" },
      { label: "Latar Belakang", href: "/tentang#latar-belakang" },
      { label: "Tujuan", href: "/tentang#tujuan" },
    ],
  },
  { label: "Mitra", href: "/mitra" },
  {
    label: "Teknologi",
    href: "/teknologi",
    dropdown: [
      { label: "Semua Teknologi", href: "/teknologi?filter=semua" },
      { label: "Biji Kopi", href: "/teknologi?filter=kopi" },
      { label: "Gula Kelapa", href: "/teknologi?filter=gulakelapa" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === "/";
  const useWhiteLogo = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHome ? window.innerHeight - 56 : 20;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll(); // Check initially
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Petrolab"
            width={180}
            height={40}
            style={{
              width: "auto",
              height: "36px",
              objectFit: "contain",
              filter: useWhiteLogo ? "brightness(0) invert(1)" : "none",
              margin: "0",
            }}
            priority
          />
        </Link>
        <button
          className={`menu-toggle ${mobileOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={mobileOpen ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className={`nav-dropdown-wrapper ${activeDropdown === item.label ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Desktop: parent link + chevron */}
                <Link
                  href={item.href}
                  className="nav-dropdown-trigger"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  <svg
                    className="nav-chevron"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {/* Mobile toggle button */}
                <button
                  className="nav-dropdown-mobile-toggle"
                  aria-label={`Toggle ${item.label} submenu`}
                  onClick={() => toggleMobileDropdown(item.label)}
                >
                  {item.label}
                  <svg
                    className={`nav-chevron ${mobileDropdown === item.label ? "rotated" : ""}`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div
                  className={`nav-dropdown-panel ${
                    mobileDropdown === item.label ? "mobile-open" : ""
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="nav-dropdown-item"
                      onClick={() => {
                        setMobileOpen(false);
                        setActiveDropdown(null);
                        setMobileDropdown(null);
                      }}
                    >
                      <span className="nav-dropdown-arrow">›</span>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
