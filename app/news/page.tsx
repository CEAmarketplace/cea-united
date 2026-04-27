"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteHeader from "@/components/siteheader";
import SiteFooter from "@/components/sitefooter";
import { Lang, readLang, withLang } from "@/lib/lang";

const content: Record<Lang, any> = {
  mn: {
    nav: {
      services: "Үйл ажиллагаа",
      news: "Мэдээ мэдээлэл",
      contact: "Холбоо барих",
    },
    title: "Мэдээ мэдээлэл",
    intro:
      "Одоогоор мэдээлэл бэлтгэгдэж байна. Зах зээлийн судалгаа, гадаад худалдаа болон үйл ажиллагаатай холбоотой мэдээллүүд тун удахгүй нэмэгдэнэ.",
    note:
      "Хэрэв мэдээлэл авах эсвэл хамтран ажиллах сонирхолтой бол бидэнтэй холбогдоно уу.",
    button: "Холбоо барих",
    cards: [
      "Зах зээлийн судалгаа",
      "Гадаад худалдааны мэдээлэл",
      "Үйл ажиллагааны шинэчлэлт",
    ],
  },
  en: {
    nav: {
      services: "Our Services",
      news: "News and Insight",
      contact: "Contacts",
    },
    title: "News & Insights",
    intro:
      "Content is currently being prepared. Market insights, trade updates, and operational reports will be available soon.",
    note:
      "If you would like to request information or discuss potential collaboration, please contact us.",
    button: "Contact Us",
    cards: ["Market Insights", "Trade Updates", "Operational Reports"],
  },
  jp: {
    nav: {
      services: "事業内容",
      news: "ニュース・情報",
      contact: "お問い合わせ",
    },
    title: "ニュース・情報",
    intro:
      "現在、コンテンツを準備中です。市場分析や貿易関連情報などを順次公開予定です。",
    note:
      "情報提供や協業に関するご相談がございましたら、お気軽にお問い合わせください。",
    button: "お問い合わせ",
    cards: ["市場分析", "貿易関連情報", "活動報告"],
  },
};

export default function NewsPage() {
  const [lang, setLang] = useState<Lang>("mn");

  useEffect(() => {
    setLang(readLang());
  }, []);

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#0f1a17] text-[#f5f1e8]">
      <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold md:text-6xl">{t.title}</h1>

          <p className="mt-8 leading-8 text-white/70">{t.intro}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.cards.map((card: string) => (
            <div
              key={card}
              className="rounded-[1.75rem] border border-white/10 bg-[#f5f1e8]/[0.04] p-8 text-center"
            >
              <h2 className="text-xl font-medium">{card}</h2>
              <p className="mt-4 text-sm text-white/45">Coming soon</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[2rem] border border-[#d8bc84]/20 bg-[#d8bc84]/10 p-8 text-center">
          <p className="leading-8 text-white/75">{t.note}</p>

          <Link
            href={withLang("/contact", lang)}
            className="mt-8 inline-flex rounded-full bg-[#d1b178] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            {t.button}
          </Link>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}