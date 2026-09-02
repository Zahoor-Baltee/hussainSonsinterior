import ProductsPage from "@/components/products/ProductsPage";
import { Locale } from "@/config/locales";
import { getContent } from "@/lib/i18n";

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
        <ProductsPage
            locale={locale}
            t={t}
        />
    );
}