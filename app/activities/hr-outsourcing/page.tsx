"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Lang, readLang, saveLang, withLang } from "@/lib/lang";

const content: Record<Lang, any> = {
  mn: {
    home: "Нүүр хуудас",
    label: "Хүний нөөцийн аутсорсинг",
    title: "Хүний нөөцийн аутсорсинг",
    paragraphs: [
      "Монгол улсын хөдөлмөрийн зах зээлийн эрэлт, ур чадварын хэрэгцээг хангах зорилгоор бид хүний нөөцийн аутсорсинг үйлчилгээг санал болгож байна.",
      "Байгууллагат санал болгох хүний нөөцийг бүрдүүлэхдээ тухайн орон тоонд шаардлагатай харилцааны ур чадвар, ажил гүйцэтгэхтэй холбоотой байгууллагуудаас тавьдаг ерөнхий шаардлагын дагуу хүмүүсийг сургаж, чадавхижуулдагаараа онцлог.",
      "Одоогийн байдлаар оффис жолоочийн сургалт явагдаж байгаа бөгөөд эхний сургалтаас төгссөн жолооч нар бизнесийн байгууллагуудад амжилттай ажиллаж байна.",
      "Цаашид зайнаас болон холимог хэлбэрээр ажиллах ур чадвартай хүмүүсийг бэлтгэх, хөдөлмөрийн зах зээлд нийлүүлэх чиглэлээр үйл ажиллагаа өргөжүүлэн байгууллагуудад хэрэгцээтэй хүний нөөцийг нийлүүлэх болно.",
    ],
  },
  en: {
    home: "Home",
    label: "HR Outsourcing & Talent Development",
    title: "HR Outsourcing & Talent Development",
    paragraphs: [
      "To meet the evolving demands of Mongolia's labor market, we offer specialized HR outsourcing and professional training.",
      "We don't just supply staff; we meticulously train our candidates to ensure they possess the soft skills and operational excellence required by modern organizations.",
      "Currently, our specialized Corporate Driver program is delivering proven results for our partners.",
      "Moving forward, we are expanding our focus to developing a remote and hybrid-ready workforce to empower businesses in the digital age.",
    ],
  },
  jp: {
    home: "ホーム",
    label: "人材アウトソーシング・育成事業",
    title: "人材アウトソーシング・育成事業",
    paragraphs: [
      "モンゴルの労働市場における高度なスキルへの需要に応えるため、当社は教育重視型の人材派遣サービスを提供しています。",
      "単なる紹介に留まらず、各企業の要求水準に合わせた実務・マナー教育を実施し、即戦力となる人材を育成しています。",
      "現在、オフィス運転手に特化した研修プログラムが多くの企業で高く評価されています。",
      "今後はデジタルトランスフォーメーションを見据え、リモートワークやハイブリッドワークに対応可能な次世代の人材育成を通じ、企業の成長を支援してまいります。",
    ],
  },
};

export default function HROutsourcingPage() {
  const [lang, setLang] = useState<Lang>("mn");

  useEffect(() => {
    setLang(readLang());
  }, []);

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#0f1a17] text-[#f5f1e8]">
      <header className="border-b border-white/10 bg-[#0f1a17]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={withLang("/", lang)}>
            <img src="/cea-logo.png" alt="CEA United" className="h-12 w-auto md:h-16" />
          </Link>

          <div className="flex items-center gap-4">
            <Link href={withLang("/", lang)} className="text-sm text-white/70 hover:text-white">
              {t.home}
            </Link>

            <div className="flex items-center gap-2 rounded-full border border-white/10 p-1 text-sm">
              {(["mn", "en", "jp"] as Lang[]).map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    saveLang(item);
                  setLang(item);
                    }}
                  className={`rounded-full px-3 py-1 transition ${
                    lang === item ? "bg-white text-black" : "text-white/70"
                  }`}
                >
                  {item === "jp" ? "JP" : item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-[#d8bc84]">{t.label}</p>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold md:text-7xl">{t.title}</h1>

        <div className="mt-12 max-w-4xl space-y-7 text-lg leading-9 text-white/75">
          {t.paragraphs.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}