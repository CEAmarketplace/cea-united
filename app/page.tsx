"use client";

import { useEffect, useState } from "react";
import { Lang, readLang } from "@/lib/lang";

type GatewayContent = {
  business: {
    title: string;
    entity: string;
    action: string;
  };
  nonprofit: {
    title: string;
    entity: string;
    action: string;
  };
};

const content: Record<Lang, GatewayContent> = {
  mn: {
    business: {
      title: "Бизнес консалтинг",
      entity: "CEA United LLC",
      action: "Нэвтрэх",
    },
    nonprofit: {
      title: "Төрийн бус байгууллага",
      entity: "CEA NGO",
      action: "Нэвтрэх",
    },
  },

  en: {
    business: {
      title: "Business Consulting",
      entity: "CEA United LLC",
      action: "Enter",
    },
    nonprofit: {
      title: "Nonprofit",
      entity: "CEA NGO",
      action: "Enter",
    },
  },

  jp: {
    business: {
      title: "ビジネスコンサルティング",
      entity: "CEA United LLC",
      action: "進む",
    },
    nonprofit: {
      title: "非営利団体",
      entity: "CEA NGO",
      action: "進む",
    },
  },
};

const languageLabels: Record<Lang, string> = {
  mn: "MN",
  en: "EN",
  jp: "日本語",
};

const BUSINESS_URL = "https://business.ceaunited.com";
const NGO_URL = "https://ngo.ceaunited.com";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("mn");

  useEffect(() => {
    setLang(readLang());
  }, []);

  const t = content[lang];

  const selectLanguage = (nextLang: Lang) => {
    setLang(nextLang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLang);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f0e8] text-[#083F51]">
      {/* LANGUAGE SWITCHER */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="flex justify-end px-6 py-6 md:px-10 md:py-8">
          <nav
            aria-label="Language selection"
            className="flex items-center gap-5"
          >
            {(["mn", "en", "jp"] as Lang[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => selectLanguage(item)}
                className={`relative pb-1 text-[10px] font-semibold tracking-[0.12em] transition-colors ${
                  lang === item
                    ? "text-[#083F51]"
                    : "text-[#083F51]/40 hover:text-[#083F51]/70"
                }`}
              >
                {languageLabels[item]}

                {lang === item && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-[#083F51]" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* DESKTOP */}
      <div className="hidden min-h-screen md:grid md:grid-cols-2">
        {/* BUSINESS */}
        <a
          href={`${BUSINESS_URL}?lang=${lang}`}
          className="group relative flex min-h-screen items-center bg-[#083F51] px-10 text-[#f5f1e8] lg:px-16"
        >
          <div className="mx-auto w-full max-w-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
              {t.business.entity}
            </p>

            <h1
              className="mt-7 max-w-lg text-[clamp(2.4rem,3.8vw,4.6rem)] font-normal leading-[1.05] tracking-[-0.03em]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {t.business.title}
            </h1>

            <div className="mt-10 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
              <span>{t.business.action}</span>

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        </a>

        {/* NONPROFIT */}
        <a
          href={`${NGO_URL}?lang=${lang}`}
          className="group relative flex min-h-screen items-center bg-[#f3f0e8] px-10 text-[#083F51] lg:px-16"
        >
          <div className="mx-auto w-full max-w-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#083F51]/45">
              {t.nonprofit.entity}
            </p>

            <h1
              className="mt-7 max-w-lg text-[clamp(2.4rem,3.8vw,4.6rem)] font-normal leading-[1.05] tracking-[-0.03em]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {t.nonprofit.title}
            </h1>

            <div className="mt-10 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
              <span>{t.nonprofit.action}</span>

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* MOBILE */}
      <div className="grid min-h-screen grid-rows-2 pt-16 md:hidden">
        {/* BUSINESS MOBILE */}
        <a
          href={`${BUSINESS_URL}?lang=${lang}`}
          className="group flex items-center bg-[#083F51] px-6 text-[#f5f1e8]"
        >
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/45">
              {t.business.entity}
            </p>

            <h1
              className="mt-5 max-w-xs text-[2.25rem] font-normal leading-[1.05] tracking-[-0.03em]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {t.business.title}
            </h1>

            <div className="mt-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em]">
              <span>{t.business.action}</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* NONPROFIT MOBILE */}
        <a
          href={`${NGO_URL}?lang=${lang}`}
          className="group flex items-center bg-[#f3f0e8] px-6 text-[#083F51]"
        >
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#083F51]/45">
              {t.nonprofit.entity}
            </p>

            <h1
              className="mt-5 max-w-xs text-[2.25rem] font-normal leading-[1.05] tracking-[-0.03em]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {t.nonprofit.title}
            </h1>

            <div className="mt-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em]">
              <span>{t.nonprofit.action}</span>
              <span>→</span>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}