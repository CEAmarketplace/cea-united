import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEA United",
  description:
    "CEA United develops flexible, practical, and scalable business solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className="bg-[#0f1a17] text-[#f5f1e8] antialiased">
        {children}
      </body>
    </html>
  );
}