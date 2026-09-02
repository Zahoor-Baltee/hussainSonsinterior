import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import HeroSection from "@/components/home/HeroSection";
import BusinessIntro from "@/components/home/BusinessIntro";
import ProductCategories from "@/components/home/ProductCategories";
import ReadyMadeProducts from "@/components/home/ReadyMadeProducts";
import CustomWoodwork from "@/components/home/CustomWoodwork";
import CraftsmanshipProcess from "@/components/home/CraftsmanshipProcess";
import PortfolioGallery from "@/components/home/PortfolioGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

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
      <ProductCategories locale={locale} />
      <ReadyMadeProducts locale={locale} />
      <CustomWoodwork locale={locale} />
      <CraftsmanshipProcess locale={locale} />
      <PortfolioGallery locale={locale} />
      <WhyChooseUs locale={locale} />
      <Testimonials locale={locale} />
      <FAQ locale={locale} />
      <FinalCTA locale={locale} />
    </main>
  );
}