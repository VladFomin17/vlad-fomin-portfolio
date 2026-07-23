import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Влад Фомин — Frontend-разработчик",
  description:
    "Портфолио Владислава Фомина: интерфейсы административных панелей, дашбордов и лендингов.",
  openGraph: {
    title: "Влад Фомин — Frontend-разработчик",
    description:
      "Интерфейсы административных панелей, дашбордов и лендингов.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
