import { getContent } from "@/lib/i18n";
import { Locale } from "@/config/locales";
import CustomPage from "@/components/custom/CustomPage";

type CustomRouteProps = {
    params: Promise<{
        locale: Locale;
    }>;
};

export default async function CustomRoute({
    params,
}: CustomRouteProps) {
    const { locale } = await params;

    const t = getContent(locale);

    return (
        <CustomPage
            locale={locale}
            t={t}
        />
    );
}