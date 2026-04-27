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
    hero: {
      title: "Бүтээмжээ өсгө",
      subtitle: "Tогтвортой хөгжилд чиглэсэн бодит шийдэл.",
      primary: "Үйл ажиллагаа",
      secondary: "Холбоо барих",
    },
    servicesTitle: "Манай үйл ажиллагаа",
    services: [
      {
        title: "Гадаад худалдааны зөвлөх үйлчилгээ",
        text: "Импорт, экспорттой холбоотойгоор таны бизнесийг өргөжүүлэхэд бид тусална.",
        href: "/activities/trade",
        external: false,
      },
      {
        title: "Хүний нөөцийн аутсорсинг",
        text: "Аутсорсинг хийх боломжтой орон тоог бид хангана.",
        href: "/activities/hr-outsourcing",
        external: false,
      },
      {
        title: "Байгаль орчин ба нийгмийн хөгжлийн хөтөлбөрүүд",
        text: "Байгаль орчин, нийгмийн сайн сайхан байдалд чиглэсэн төсөл хөтөлбөрүүдийг шат дараалалтайгаар хөгжүүлэн ажиллана.",
        href: "https://ngo.ceaunited.com",
        external: true,
      },
    ],
    principlesTitle: "Үйл ажиллагааны зарчим",
    principles: [
      {
        title: "Бэлтгэл",
        text: "Асуудлыг илрүүлэх Хэрэгцээг тодорхойлох Стандартад нийцүүлэх Төлөвлөх",
      },
      {
        title: "Гүйцэтгэл",
        text: "Төлөвлөгөөг хэрэгжүүлэн хэрэгцээг хангах замаар асуудлыг шийдвэрлэнэ.",
      },
      {
        title: "Сайжруулах",
        text: "Үр дүнд суурилан зөрүүг арилгах замаар сайжруулалтын шинэ боломжуудыг санал болгоно.",
      },
    ],
    valueTitle: "Биднийг сонгох шалтгаан",
    valueIntro: "Бид үйл ажиллагаандаа дараах үнэт зүйлсийг эрхэмлэдэг.",
    values: ["Үйлчилгээний чанар", "Урт хугацааны хамтын ажиллагаа", "Эргэх холбоо"],
  },

  en: {
    nav: {
      services: "Our Services",
      news: "Reports and other informations",
      contact: "Contacts",
    },
    hero: {
      title: "Expand your capacity",
      subtitle: "Practical Solutions for Sustainable Future",
      primary: "Our Services",
      secondary: "Contacts",
    },
    servicesTitle: "Our services",
    services: [
      {
        title: "End-to-end Trade Management",
        text: "We empower your business expansion through end-to-end trade management.",
        href: "/activities/trade",
        external: false,
      },
      {
        title: "HR Outsourcing",
        text: "We provide professional manpower outsourcing solutions tailored for the local market.",
        href: "/activities/hr-outsourcing",
        external: false,
      },
      {
        title: "Environmental and Social Development Programs",
        text: "We develop and implement step-by-step programs aimed at environmental sustainability and social well-being.",
        href: "https://ngo.ceaunited.com",
        external: true,
      },
    ],
    principlesTitle: "Operational Principles",
    principles: [
      {
        title: "Preparation",
        text: "Identify issues, define needs, ensure compliance with standards, and develop a strategic plan.",
      },
      {
        title: "Execution",
        text: "Solve problems by implementing the plan and meeting the identified needs.",
      },
      {
        title: "Improvement",
        text: "Propose new opportunities for enhancement by bridging gaps based on performance results.",
      },
    ],
    valueTitle: "Value Proposition",
    valueIntro: "",
    values: [
      "Excellence in Quality: We adhere to rigorous standards to ensure premium service delivery in every project we undertake.",
      "Strategic Partnerships: We go beyond transactions, focusing on building sustainable, long-term relationships with our clients.",
      "Transparent Communication: A robust feedback loop is at the heart of our operations, ensuring we stay aligned with your goals.",
    ],
  },

  jp: {
    nav: {
      services: "事業内容",
      news: "活動報告・ニュース",
      contact: "お問い合わせ",
    },
    hero: {
      title: "可能性を広げる",
      subtitle: "持続可能な発展に向けた具体的な解決策",
      primary: "事業内容",
      secondary: "お問い合わせ",
    },
    servicesTitle: "活動内容",
    services: [
      {
        title: "貿易実務・伴奏型サポート",
        text: "貿易実務の包括的なサポートで、貴社のビジネス拡大を実現します。",
        href: "/activities/trade",
        external: false,
      },
      {
        title: "人材アウトソーシング",
        text: "ウランバートル市内での専門運転手および人材派遣ソリューションを提供します。",
        href: "/activities/hr-outsourcing",
        external: false,
      },
      {
        title: "環境・社会開発プログラム",
        text: "環境の持続可能性および社会的な福祉の向上を目的としたプログラムを段階的に開発・実施します。",
        href: "https://ngo.ceaunited.com",
        external: true,
      },
    ],
    principlesTitle: "運用原則",
    principles: [
      {
        title: "準備",
        text: "課題の抽出、ニーズの特定、標準化への適合、 計画立案。",
      },
      {
        title: "実行",
        text: "計画の実施によりニーズを満たし、課題を解決します。",
      },
      {
        title: "改善",
        text: "実績に基づきギャップを解消し、新たな改善の機会を提案します。",
      },
    ],
    valueTitle: "当社の強み",
    valueIntro: "",
    values: [
      "徹底した品質管理: 高い基準を遵守し、細部にまでこだわった妥協のない品質を追求します。",
      "長期的な信頼関係: 単なる取引関係を超え、共に成長できる持続可能なパートナーシップを構築します。",
      "密なコミュニケーション: 迅速かつ透明性の高いフィードバック体制により、常にお客様のご要望を最優先に対応します。",
    ],
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("mn");

  useEffect(() => {
    setLang(readLang());
  }, []);

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#0f1a17] text-[#f5f1e8]">
      <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

      <section className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-20">
        <div className="flex w-full flex-col items-center text-center">
          <img src="/cea-logo.png" alt="CEA United" className="h-28 w-auto md:h-36" />

          <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight md:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="rounded-full bg-[#d1b178] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              {t.hero.primary}
            </a>

            <Link
              href={withLang("/contact", lang)}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              {t.hero.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-semibold md:text-5xl">{t.servicesTitle}</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.services.map((card: any) =>
              card.external ? (
                <a
                  key={card.title}
                  href={`${card.href}?lang=${lang}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.75rem] border border-white/10 bg-[#f5f1e8]/[0.04] p-8 transition hover:border-[#d8bc84]/40 hover:bg-[#f5f1e8]/[0.07]"
                >
                  <h3 className="text-2xl font-medium">{card.title}</h3>
                  <p className="mt-5 leading-7 text-white/70">{card.text}</p>
                </a>
              ) : (
                <Link
                  key={card.title}
                  href={withLang(card.href, lang)}
                  className="rounded-[1.75rem] border border-white/10 bg-[#f5f1e8]/[0.04] p-8 transition hover:border-[#d8bc84]/40 hover:bg-[#f5f1e8]/[0.07]"
                >
                  <h3 className="text-2xl font-medium">{card.title}</h3>
                  <p className="mt-5 leading-7 text-white/70">{card.text}</p>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-semibold md:text-5xl">{t.principlesTitle}</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.principles.map((item: any, index: number) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[#f5f1e8]/[0.04] p-8">
                <p className="text-sm tracking-[0.25em] text-[#d8bc84]">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-medium">{item.title}</h3>
                <p className="mt-5 leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-semibold md:text-5xl">{t.valueTitle}</h2>

          {t.valueIntro && <p className="mt-6 text-white/70">{t.valueIntro}</p>}

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.values.map((item: string) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-[#f5f1e8]/[0.04] p-8">
                <p className="leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}