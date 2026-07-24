import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site";

const title = "Влад Фомин — Frontend-разработчик React и Next.js";
const description =
  "Портфолио frontend-разработчика Владислава Фомина: административные панели, дашборды, лендинги и интерфейсы для работы с данными.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Портфолио Владислава Фомина",
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  verification: {
    google: "6s2K6cpMer5LKKglisMG8NjSWugkfKvU8jes467fbss"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Портфолио Владислава Фомина",
      inLanguage: "ru-RU"
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Владислав Фомин",
      url: siteUrl,
      jobTitle: "Frontend-разработчик",
      email: "mailto:fominvladosik@gmail.com",
      sameAs: [
        "https://github.com/VladFomin17",
        "https://t.me/Vlad_Fomii"
      ]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
