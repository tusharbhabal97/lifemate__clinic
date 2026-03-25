import { useState } from "react";
import { clinicInfo } from "../data/clinicInfo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About us", href: "#about" },
  { label: "Appointment", href: "#appointment" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const phoneHref = `tel:${clinicInfo.phonePrimary.replace(/\s+/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe7ef] bg-[#edf3f7]/95 backdrop-blur">
      <nav className="mx-auto flex h-24 w-full max-w-[1320px] items-center px-5 lg:px-6" aria-label="Primary">
        <a href="#home" className="flex items-center gap-3" aria-label="LifeMate Healthcare Home">
          <img src="/images/logo.png" alt="LifeMate Healthcare" className="h-10 w-10 object-contain" />
          <span className="flex flex-col leading-none">
            <span className="text-[20px] font-bold leading-[1] tracking-[0.1px] text-[#0E5A8A] md:text-[22px]">
              LifeMate Clinic
              <sup className="ml-1 align-super text-[9px] font-bold text-[#0E5A8A]/70">TM</sup>
            </span>
            {/* <span className="mt-1 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#0E5A8A] md:text-[10px]">
              Pvt Ltd
            </span> */}
          </span>
        </a>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d1d1d1] text-[#4f4f4f] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>

        <ul className="ml-14 hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-[17px] font-medium transition hover:text-[#0084d4] ${
                  link.label === "Home" ? "text-[#0069ab]" : "text-[#3d3d3d]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={phoneHref}
          className="ml-auto hidden rounded-2xl bg-gradient-to-r from-[#7fd4ff] to-[#00a4f4] px-8 py-3 text-[17px] font-semibold leading-none text-white shadow-[0_16px_28px_rgba(0,164,244,0.24)] transition hover:brightness-95 lg:inline-flex"
        >
          Call {clinicInfo.phonePrimary}
        </a>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-[#d1d1d1] bg-white px-5 py-4 lg:hidden">
          <ul className="grid gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-[#4f4f4f] hover:bg-[#eff9ff]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={phoneHref}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-[#00a4f4] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Call {clinicInfo.phonePrimary}
          </a>
        </div>
      ) : null}
    </header>
  );
}
