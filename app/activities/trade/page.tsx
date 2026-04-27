"use client";

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
    title: "Гадаад худалдааны зөвлөх үйлчилгээ",
    intro:
      "Бид танд гадаад худалдааны түнш олохоос эхлээд эхний тээврийг амжилттай зохион байгуулах хүртэлх бүх үе шатад тохирсон үйлчилгээг санал болгоно.",
    services: [
      {
        title: "Бизнес төлөвлөгөө",
        text: "Гадаад худалдааг эхлүүлэхтэй холбоотой зах зээлийн судалгаа, санхүүгийн төлөвлөлт үйл ажиллагааны төлөвлөгөө бүхий цогц бизнес төлөвлөгөө",
      },
      {
        title: "Харилцагч зууч",
        text: "Боломжит зах зээл, боломжит харилцагчийг олохоос гэрээ байгуулах хүртэл гадаад харилцаа, бүтээгдэхүүн, бизнес хөгжүүлэлт",
      },
      {
        title: "Гэрээний хяналт",
        text: "Гадаад харилцагчтай байгуулах гэрээнд хяналт тавих, гэрээний заалтыг өөрчлөх, үнэд өөрчлөлт оруулах гэх мэт хэлэлцээр",
      },
      {
        title: "Гааль, тээвэр",
        text: "Тээвэр зууч, гаалийн бүрдүүлэлтийн мэргэжлийн, туршлагатай байгууллагатай зуучлах",
      },
    ],
  },
  en: {
    nav: {
      services: "Our Services",
      news: "Reports",
      contact: "Contacts",
    },
    title: "Global Trade Partnership",
    intro:
      "We support your entire international trade journey from partner sourcing to first shipment execution.",
    services: [
      { title: "Market Entry", text: "Comprehensive market research, financial forecasting, and localized operational planning to launch your trade." },
      { title: "Matching", text: "Identifying leads and negotiating contracts. We manage the entire cycle from outreach to deal closure." },
      { title: "Contracts", text: "Strategic oversight of international agreements, including amendments, pricing reviews, and legal coordination." },
      { title: "Logistics", text: "Seamless coordination with elite freight forwarders and customs brokers for efficient end-to-end delivery." },
    ],
  },
  jp: {
    nav: {
      services: "事業内容",
      news: "ニュース",
      contact: "お問い合わせ",
    },
    title: "海外展開・伴走型支援",
    intro:
      "パートナー開拓から初回輸送まで、貿易の全工程を支援します。",
    services: [
      { title: "市場調査", text: "市場調査から財務計画、運用スキームの構築まで、貿易開始に必要なビジネスプランをトータルに立案します。" },
      { title: "マッチング", text: "潜在顧客の開拓から商談、契約締結に至るまでの海外営業・事業開発を代行します。" },
      { title: "契約支援", text: "海外パートナーとの契約審査、条件変更、価格交渉など、貴社の利益を守るための実務を担います。" },
      { title: "物流支援", text: "専門知識を持つ物流会社や通関業者と連携し、スムーズで確実な輸送体制を構築します。" },
    ],
  },
};

export default function Page() {
  const [lang, setLang] = useState<Lang>("mn");

  useEffect(() => {
    setLang(readLang());
  }, []);

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#0f1a17] text-[#f5f1e8]">
      <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-semibold">{t.title}</h1>
        <p className="mt-6 text-white/70">{t.intro}</p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {t.services.map((s: any) => (
            <div key={s.title} className="border border-white/10 p-6 rounded-xl">
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}