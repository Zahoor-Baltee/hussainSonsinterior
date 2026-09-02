import AboutPage from "@/components/about/AboutPage";
import { Locale } from "@/config/locales";
import { getContent } from "@/lib/i18n";

type AboutRouteProps = {
    params: Promise<{ locale: Locale }>;
};

export default async function AboutRoute({ params }: AboutRouteProps) {
    const { locale } = await params;
    const t = getContent(locale);

    return <AboutPage locale={locale} t={t} />;
}