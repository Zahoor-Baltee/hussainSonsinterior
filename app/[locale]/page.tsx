import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import HeroSection from "@/components/home/HeroSection";
import BusinessIntro from "@/components/home/BusinessIntro";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }


  return (
    <main>
      <HeroSection locale={locale} />
      <BusinessIntro locale={locale} />
    </main>
  );
}