export type Lang = "mn" | "en" | "jp";

export function readLang(): Lang {
  if (typeof window === "undefined") return "mn";

  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("lang");

  if (fromUrl === "mn" || fromUrl === "en" || fromUrl === "jp") {
    localStorage.setItem("cea_lang", fromUrl);
    return fromUrl;
  }

  const saved = localStorage.getItem("cea_lang");

  if (saved === "mn" || saved === "en" || saved === "jp") {
    return saved;
  }

  return "mn";
}

export function saveLang(lang: Lang) {
  if (typeof window === "undefined") return;

  localStorage.setItem("cea_lang", lang);

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
}

export function withLang(path: string, lang: Lang) {
  return `${path}?lang=${lang}`;
}