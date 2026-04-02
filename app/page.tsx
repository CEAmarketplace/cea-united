"use client";

import { useState } from "react";

type Lang = "mn" | "en";

const content: Record<Lang, any> = {
  mn: {
    nav: {
      about: "Бидний тухай",
      services: "Үйлчилгээ",
      marketplace: "Marketplace",
      jobs: "Нээлттэй ажлын байр",
      contact: "Холбоо барих",
    },
    hero: {
      subtitle: "Бизнесийн тасралтгүй үйл ажиллагааг дэмжих шийдэл",
      description:
        "Бид уян хатан, хэрэгжихүйц, өсөх боломжтой бизнесийн шийдлүүдийг хөгжүүлнэ.",
      primary: "Холбоо барих",
      secondary: "Үйлчилгээ",
    },
    about: {
      title: "Бидний тухай",
      description1:
        "Бид байгууллагуудад тодорхой хэрэгцээ, тодорхой үнэ цэнтэй үйлчилгээг нийлүүлэхийг зорьж байна.",
      description2:
        "Бид зах зээлд шаардлагатай бөгөөд бодит хэрэгцээнд нийцсэн, өргөжих боломжтой бизнесийн шийдлүүдийг хөгжүүлнэ.",
      description3:
        "Цаашид өөр хоорондоо уялдаа хамааралтай, цаг үедээ нийцсэн бүтээгдэхүүнийг түгээх болно.",
    },
    services: {
      title: "Үйлчилгээ",
      intro: "Хэрэгжүүлж байгаа төслүүд",
      veloraTitle: "Velora Mobility",
      veloraText:
        "Байгууллага болон тодорхой хэрэгцээтэй харилцагчдад зориулсан жолоочийн outsourcing үйлчилгээ.",
      veloraSubtext:
        "Та өөрийн бизнесийн болон хувийн хэрэгцээндээ нийцсэн нөхцлөөр манай үйлчилгээг авах боломжтой.",
      veloraButton: "Дэлгэрэнгүй",
      marketplaceTitle: "Marketplace",
      marketplaceText:
        "Үйлчилгээ, хэрэгцээ, гүйцэтгэлийг холбох платформ.",
      marketplaceSubtext:
        "A platform connecting demand, services, and execution.",
      marketplaceBadge: "Coming soon",
    },
    marketplace: {
      title: "Marketplace",
      badge: "Coming soon",
      text1: "CEA United Marketplace тун удахгүй.",
      text2:
        "Ирээдүйд үйлчилгээ, захиалга, хамтын ажиллагааны урсгалыг илүү хялбар холбосон цогц платформ хэлбэрээр хөгжүүлнэ.",
    },
    jobs: {
      title: "Нээлттэй ажлын байр",
      intro:
        "Манай байгууллагатай хамт өсөх сонирхолтой бүх хүмүүст боломж нээлттэй.",
      cards: [
        {
          title: "Жолооч",
          text: "Velora Mobility үйлчилгээний хүрээнд хариуцлагатай, цаг баримталдаг жолооч нартай хамтран ажиллана.",
        },
        {
          title: "Оператор / Диспетчер",
          text: "Үйл ажиллагаа, зохицуулалт, хяналтын чиглэлд ажиллах боломж.",
        },
        {
          title: "Ирээдүйн нээлттэй боломжууд",
          text: "Marketplace өсөхийн хэрээр шинэ ажлын байрууд нэмэгдэнэ.",
        },
      ],
      cta: "Холбоо барих",
    },
    contact: {
      title: "Холбоо барих",
      description:
        "Хамтын ажиллагаа, үйлчилгээ, ажлын байртай холбоотойгоор бидэнтэй холбогдоно уу.",
      phoneLabel: "Утас",
      emailLabel: "И-мэйл",
      addressLabel: "Байршил",
      cta: "И-мэйл илгээх",
      phone: "+976 9500 8530",
      email: "info@ceaunited.com",
      address: "Ulaanbaatar, Mongolia",
    },
    footer: "© 2026 CEA United. All rights reserved.",
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      marketplace: "Marketplace",
      jobs: "Open Positions",
      contact: "Contact",
    },
    hero: {
      subtitle: "A solution that supports continuous business operations",
      description:
        "Flexible, practical, and scalable solutions built for real business needs.",
      primary: "Contact",
      secondary: "Services",
    },
    about: {
      title: "About",
      description1:
        "Our company aims to deliver services with clear purpose and defined value for organizations.",
      description2:
        "We develop scalable business solutions built around real market needs.",
      description3:
        "We build interconnected products that evolve with time and remain relevant.",
    },
    services: {
      title: "Services",
      intro:
        "CEA United builds focused services and platforms designed to scale in structured phases.",
      veloraTitle: "Velora Mobility",
      veloraText:
        "A driver outsourcing service designed for organizations and clients with defined mobility needs.",
      veloraSubtext:
        "Our services can be tailored to meet both your business and personal needs.",
      veloraButton: "View details",
      marketplaceTitle: "Marketplace",
      marketplaceText:
        "A platform connecting services, demand, and execution.",
      marketplaceSubtext:
        "Designed to bring requests, providers, and workflows together.",
      marketplaceBadge: "Coming soon",
    },
    marketplace: {
      title: "Marketplace",
      badge: "Coming soon",
      text1: "CEA United Marketplace is on the way.",
      text2:
        "It will evolve into a platform that connects services, requests, and collaboration more efficiently.",
    },
    jobs: {
      title: "Open Positions",
      intro: "We are open to working with people who want to grow with us.",
      cards: [
        {
          title: "Driver",
          text: "We work with responsible and punctual drivers under Velora Mobility.",
        },
        {
          title: "Operator / Dispatcher",
          text: "Opportunities in coordination, monitoring, and operational control.",
        },
        {
          title: "Future Roles",
          text: "Additional opportunities will open as the platform expand.",
        },
      ],
      cta: "Contact us",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with us regarding collaboration, services, or open positions.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Location",
      cta: "Send email",
      phone: "+976 9923 9036",
      email: "info@ceaunited.com",
      address: "Ulaanbaatar, Mongolia",
    },
    footer: "© 2026 CEA United. All rights reserved.",
  },
};

export default function Page() {
  const [lang, setLang] = useState<Lang>("mn");
  const t = content[lang as Lang];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-[#0f1a17] text-[#f5f1e8]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1a17]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollToId("hero")}>
            <img
              src="/cea-logo.png"
              alt="CEA United"
              className="h-12 w-auto md:h-16"
            />
          </button>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <button
              onClick={() => scrollToId("about")}
              className="transition hover:text-white/70"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToId("services")}
              className="transition hover:text-white/70"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToId("marketplace")}
              className="transition hover:text-white/70"
            >
              {t.nav.marketplace}
            </button>
            <button
              onClick={() => scrollToId("jobs")}
              className="transition hover:text-white/70"
            >
              {t.nav.jobs}
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="transition hover:text-white/70"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-white/10 p-1 text-sm">
            <button
              onClick={() => setLang("mn")}
              className={`rounded-full px-3 py-1 transition ${
                lang === "mn" ? "bg-white text-black" : "text-white/70"
              }`}
            >
              MN
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 transition ${
                lang === "en" ? "bg-white text-black" : "text-white/70"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section
        id="hero"
        className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-20"
      >
        <div className="w-full flex flex-col items-center text-center">
          <img
            src="/cea-logo.png"
            alt="CEA United"
            className="h-28 w-auto md:h-36"
          />

          <p className="mt-8 max-w-3xl text-2xl font-medium text-white/85 md:text-3xl">
            {t.hero.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full bg-[#d1b178] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              {t.hero.primary}
            </button>

            <button
              onClick={() => scrollToId("services")}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              {t.hero.secondary}
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-5xl">
              {t.about.title}
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-white/70 md:text-lg">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-5xl">
              {t.services.title}
            </h2>

            <p className="mt-8 text-base leading-8 text-white/70 md:text-lg">
              {t.services.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#f5f1e8]/[0.04] p-8 transition hover:border-[#d8bc84]/40">
              <h3 className="text-2xl font-medium">{t.services.veloraTitle}</h3>

              <p className="mt-4 leading-7 text-white/70">
                {t.services.veloraText}
              </p>

              <p className="mt-6 text-sm text-white/50">
                {t.services.veloraSubtext}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#c8a96b]/20 bg-[#c8a96b]/5 p-8">
              <h3 className="text-2xl font-medium">
                {t.services.marketplaceTitle}
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                {t.services.marketplaceText}
              </p>

              <p className="mt-6 text-sm text-white/50">
                {t.services.marketplaceSubtext}
              </p>

              <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#d8bc84]">
                {t.services.marketplaceBadge}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#f5f1e8]/[0.05] to-[#f5f1e8]/[0.02] p-10 md:p-14">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-3xl font-semibold md:text-5xl">
                {t.marketplace.title}
              </h2>

              <span className="rounded-full border border-[#d8bc84]/30 bg-[#d8bc84]/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#d8bc84]">
                {t.marketplace.badge}
              </span>
            </div>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/70 md:text-lg">
              <p>{t.marketplace.text1}</p>
              <p>{t.marketplace.text2}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="jobs" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-5xl">
              {t.jobs.title}
            </h2>

            <p className="mt-8 text-base leading-8 text-white/70 md:text-lg">
              {t.jobs.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.jobs.cards.map((card: { title: string; text: string }) => (
              <div
                key={card.title}
                className="rounded-[1.75rem] border border-white/10 bg-[#f5f1e8]/[0.04] p-8"
              >
                <h3 className="text-xl font-medium">{card.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full bg-[#d1b178] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              {t.jobs.cta}
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">
                {t.contact.title}
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                {t.contact.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#f5f1e8]/[0.04] p-8 md:p-10">
              <div className="space-y-6 text-white/80">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-sm text-white/45">{t.contact.phoneLabel}</p>
                  <p className="mt-2 text-lg">{t.contact.phone}</p>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <p className="text-sm text-white/45">{t.contact.emailLabel}</p>
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="mt-2 block text-lg transition hover:text-[#d8bc84]"
                  >
                    {t.contact.email}
                  </a>
                </div>

                <div className="pb-2">
                  <p className="text-sm text-white/45">{t.contact.addressLabel}</p>
                  <p className="mt-2 text-lg">{t.contact.address}</p>
                </div>
              </div>

              <a
                href={`mailto:${t.contact.email}`}
                className="mt-8 inline-flex rounded-full bg-[#d1b178] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                {t.contact.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/40">
          {t.footer}
        </div>
      </footer>
    </main>
  );
}