import ProductDetailPage from "@/components/products/ProductDetailPage";
import { Locale } from "@/config/locales";
import { PRODUCTS } from "@/data/constant";
import { getContent } from "@/lib/i18n";
import { notFound } from "next/navigation";

type ProductDetailRouteProps = {
    params: Promise<{
        locale: Locale;
        id: string;
    }>;
};

export default async function ProductDetailRoute({
    params,
}: ProductDetailRouteProps) {
    const { locale, id } = await params;

    const product = PRODUCTS.find(
        (prod) => prod.id === id
    );

    if (!product) {
        notFound();
    }

    const t = getContent(locale);
    return (
        <ProductDetailPage
            locale={locale}
            product={product}
            t={t}
        />
    );
}