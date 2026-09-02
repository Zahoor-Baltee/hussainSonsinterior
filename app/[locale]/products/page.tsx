import ProductsPage from "@/components/products/ProductsPage";
import { Locale } from "@/config/locales";
import { getContent } from "@/lib/i18n";

type ProductsRouteProps = {
    params: Promise<{
        locale: Locale;
    }>;
};

export default async function ProductsRoute({
    params,
}: ProductsRouteProps) {
    const { locale } = await params;

    const t = getContent(locale);

    return (
        <ProductsPage
            locale={locale}
            t={t}
        />
    );
}