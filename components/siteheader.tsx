"use client";

import Link from "next/link";
import { Lang, saveLang, withLang } from "@/lib/lang";

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  nav: {
    services: string;
    news: string;
    contact: string;
  };
};

export default function SiteHeader({ lang, setLang, nav }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1a17]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={withLang("/", lang)}>
          <img src="/cea-logo.png" alt="CEA United" className="h-12 w-auto md:h-16" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href={withLang("/#services", lang)}>{nav.services}</Link>
          <Link href={withLang("/news", lang)}>{nav.news}</Link>
          <Link href={withLang("/contact", lang)}>{nav.contact}</Link>
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-white/10 p-1 text-sm">
          {(["mn", "en", "jp"] as Lang[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                saveLang(item);
                setLang(item);
              }}
              className={`rounded-full px-3 py-1 transition ${
                lang === item ? "bg-white text-black" : "text-white/70"
              }`}
            >
              {item === "jp" ? "日本語" : item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}