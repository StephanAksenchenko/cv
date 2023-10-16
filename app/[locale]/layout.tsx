"use client";

import { Inter } from "next/font/google";
import "./global.scss";
import Footer from "@/src/components/footer";
import cn from "classnames";
import Header from "@/src/components/header";
import { I18nProviderClient } from "@/src/locales/client";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={cn(inter.className, "theme-dark")}>
        <I18nProviderClient locale={locale}>
          <Header />
          {children}
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  );
}
