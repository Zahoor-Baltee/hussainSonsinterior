import { getContent } from "@/lib/i18n";
import { Locale } from "@/config/locales";
import CustomPage from "@/components/custom/CustomPage";

type CustomRouteProps = {
    params: Promise<{
        locale: Locale;
    }>;
    searchParams: Promise<{
        product?: string;
        category?: string;
    }>;
};

export default async function CustomRoute({
    params,
    searchParams,
}: CustomRouteProps) {
    const { locale } = await params;
    const { product, category } = await searchParams;

    const t = getContent(locale);

    return (
        <CustomPage
            locale={locale}
            t={t}
            product={product}
            category={category}
        />
    );
}