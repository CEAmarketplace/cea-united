import { Lang } from "@/lib/lang";

type Props = {
  lang: Lang;
};

export default function SiteFooter({ lang }: Props) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/40">
        © 2026 CEA United. All rights reserved.
      </div>
    </footer>
  );
}