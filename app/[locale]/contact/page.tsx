import ContactPage from "@/components/contact/ContactPage";
import { Locale } from "@/config/locales";
import { getContent } from "@/lib/i18n";

type ContactRouteProps = {
    params: Promise<{ locale: Locale }>;
};

export default async function ContactRoute({ params }: ContactRouteProps) {
    const { locale } = await params;
    const t = getContent(locale);

    return <ContactPage locale={locale} t={t} />;
}