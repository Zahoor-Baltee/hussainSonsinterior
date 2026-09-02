import { notFound } from "next/navigation";
import { getContent } from "@/lib/i18n";
import { CATEGORIES } from "@/data/constant";
import ProductsPage from "@/components/products/ProductsPage";
import { Locale } from "@/config/locales";

type CategoryPageProps = {
    params: Promise<{
        locale: Locale;
        category: string;
    }>;
};

export default async function CategoryPage({
    params,
}: CategoryPageProps) {
    const { locale, category } = await params;

    const categoryExists = CATEGORIES.some(
        (cat: any) => cat.id === category
    );

    if (!categoryExists) {
        notFound();
    }

    const t = getContent(locale);

    return (
        <ProductsPage
            locale={locale}
            t={t}
            initialCategory={category}
        />
    );
}