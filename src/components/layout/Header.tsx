"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links: [string, string][] = [
  ["Beranda", "/"],
  ["Tentang", "/tentang"],
  ["Mitra", "/mitra"],
  ["Teknologi", "/teknologi"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const useWhiteLogo = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Petrolab"
            width={300}
            height={90}
            style={{
              width: "auto",
              height: "80px",
              objectFit: "contain",
              filter: useWhiteLogo ? "brightness(0) invert(1)" : "none",
              margin: "0",
            }}
            priority
          />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={open ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
