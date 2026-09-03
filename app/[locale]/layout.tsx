import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { isValidLocale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return {
    title: locale === "ur" ? "ہوسین اینڈ سونز کی ایس.سی.این وود ورک" : "Hussain & Sons CNC Woodwork",
    description:
      locale === "ur"
        ? "ہماری ویب سائٹ پر خوش آمدید۔"
        : "Welcome to our website.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const direction = locale === "ur" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={` ${roboto.variable} h-full antialiased`}
    // className={`${geistSans.variable} ${geistMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header locale={locale} />
        <Breadcrumb locale={locale} />
        {children}
        <WhatsAppButton
          message="Hi, I would like to know more about your CNC woodworking products."
          label="WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
        />
        <Footer locale={locale} />
      </body>
    </html>
  );
}