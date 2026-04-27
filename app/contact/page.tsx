"use client";

import { useEffect, useState } from "react";
import SiteHeader from "@/components/siteheader";
import SiteFooter from "@/components/sitefooter";
import { Lang, readLang } from "@/lib/lang";

const content: Record<Lang, any> = {
  mn: {
    nav: {
      services: "Үйл ажиллагаа",
      news: "Мэдээ мэдээлэл",
      contact: "Холбоо барих",
    },
    title: "Холбоо барих",
    intro: "Үйлчилгээ болон хамтын ажиллагааны талаар холбогдоно уу.",
    name: "Нэр",
    email: "И-мэйл",
    service: "Чиглэл сонгох",
    message: "Мессеж",
    submit: "Илгээх",
    sending: "Илгээж байна...",
    success: "Амжилттай илгээгдлээ.",
    error: "Алдаа гарлаа.",
    serverError: "Сервертэй холбогдож чадсангүй.",
    options: {
      trade: "Гадаад худалдаа",
      hr: "Хүний нөөц",
      social: "Нийгмийн хөтөлбөр",
      other: "Бусад",
    },
  },

  en: {
    nav: {
      services: "Our Services",
      news: "Reports and other informations",
      contact: "Contacts",
    },
    title: "Contact Us",
    intro: "Please contact us regarding our services or partnership opportunities.",
    name: "Name",
    email: "Email",
    service: "Select a service",
    message: "Message",
    submit: "Send",
    sending: "Sending...",
    success: "Your message has been sent successfully.",
    error: "Something went wrong.",
    serverError: "Could not connect to the server.",
    options: {
      trade: "International Trade",
      hr: "HR Outsourcing",
      social: "Social Development Programs",
      other: "Other",
    },
  },

  jp: {
    nav: {
      services: "事業内容",
      news: "活動報告・ニュース",
      contact: "お問い合わせ",
    },
    title: "お問い合わせ",
    intro: "サービスや協業に関するお問い合わせはこちらからご連絡ください。",
    name: "お名前",
    email: "メールアドレス",
    service: "お問い合わせ内容を選択",
    message: "メッセージ",
    submit: "送信",
    sending: "送信中...",
    success: "送信が完了しました。",
    error: "エラーが発生しました。",
    serverError: "サーバーに接続できませんでした。",
    options: {
      trade: "貿易支援",
      hr: "人材アウトソーシング",
      social: "社会開発プログラム",
      other: "その他",
    },
  },
};

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("mn");

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setLang(readLang());
  }, []);

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus(t.success);
        setForm({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setStatus(data?.error?.message || data?.error || t.error);
      }
    } catch {
      setStatus(t.serverError);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0f1a17] text-[#f5f1e8]">
      <SiteHeader lang={lang} setLang={setLang} nav={t.nav} />

      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-center text-4xl font-semibold md:text-6xl">
          {t.title}
        </h1>

        <p className="mt-6 text-center leading-8 text-white/70">
          {t.intro}
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <input
            type="text"
            placeholder={t.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-white/40 outline-none focus:border-[#d1b178]"
            required
          />

          <input
            type="email"
            placeholder={t.email}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-white/40 outline-none focus:border-[#d1b178]"
            required
          />

          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none focus:border-[#d1b178]"
          >
            <option className="bg-[#0f1a17]" value="">
              {t.service}
            </option>
            <option className="bg-[#0f1a17]" value={t.options.trade}>
              {t.options.trade}
            </option>
            <option className="bg-[#0f1a17]" value={t.options.hr}>
              {t.options.hr}
            </option>
            <option className="bg-[#0f1a17]" value={t.options.social}>
              {t.options.social}
            </option>
            <option className="bg-[#0f1a17]" value={t.options.other}>
              {t.options.other}
            </option>
          </select>

          <textarea
            placeholder={t.message}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="h-40 w-full rounded-xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-white/40 outline-none focus:border-[#d1b178]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#d1b178] py-4 font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? t.sending : t.submit}
          </button>
        </form>

        {status && (
          <p className="mt-6 text-center leading-7 text-white/70">
            {status}
          </p>
        )}
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}