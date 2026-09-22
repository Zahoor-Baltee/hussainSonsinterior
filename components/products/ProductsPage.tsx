"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, HelpCircle } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/constant";
import Image from "next/image";


type ProductsPageProps = {
    locale: string;
    t: any;
    initialCategory?: string;
};

export default function ProductsPage({
    locale,
    t,
    initialCategory,
}: ProductsPageProps) {

    const [selectedCategory, setSelectedCategory] = useState(initialCategory || "all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();

        return PRODUCTS.filter((prod: any) => {
            const matchesCategory =
                selectedCategory === "all" ||
                prod.category === selectedCategory;

            if (!query) {
                return matchesCategory;
            }

            const searchableText = [
                prod.name,
                prod.nameUr,
                prod.desc,
                prod.descUr,
                prod.wood,
                prod.woodUr,
                prod.finish,
                prod.finishUr,
                prod.dimensions,
            ]
                .join(" ")
                .toLowerCase();

            return matchesCategory && searchableText.includes(query);
        });
    }, [selectedCategory, searchQuery]);

    return (
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-background text-foreground transition-colors">
            {/* Header */}
            <div className="w-full max-w-3xl mb-6 sm:mb-8">
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    {t.readyMadeTitle}
                </h1>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                    {t.productsDescription}
                </p>
            </div>

            {/* Search & Filter Controls */}
            <div className="w-full mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-border">

                {/* Categories */}
                <div className="w-full overflow-hidden">
                    <div className="flex w-full gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`shrink-0 text-[11px] sm:text-xs px-3 sm:px-4 py-2 rounded-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === "all"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-secondary-foreground hover:bg-surface-secondary"
                                }`}
                        >
                            {t.all}
                        </button>

                        {CATEGORIES.map((cat: any) => (
                            <Link
                                key={cat.id}
                                href={`/${locale}/products/${cat.id}`}
                                className={`shrink-0 text-[11px] sm:text-xs px-3 sm:px-4 py-2 rounded-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat.id
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-secondary-foreground hover:bg-surface-secondary"
                                    }`}
                            >
                                {locale === "ur" ? cat.nameUr : cat.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Search */}
                <div className="relative w-full sm:w-80 sm:ml-auto mt-3 sm:mt-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

                    <input
                        type="text"
                        placeholder={t.searchProductsPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-10 text-xs pl-9 pr-3 rounded-sm border border-border bg-surface text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
                <div className="w-full text-center py-16 sm:py-20">
                    <HelpCircle className="w-10 sm:w-12 h-10 sm:h-12 text-muted-foreground mx-auto mb-3" />

                    <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                        {t.noMatchingProducts}
                    </h3>

                    <p className="text-xs text-muted-foreground mt-1">
                        {t.adjustProductFilters}
                    </p>
                </div>
            ) : (
                <div
                    className="
                w-full
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-5
                sm:gap-6
                lg:gap-8
            "
                >
                    {filteredProducts.map((prod: any) => {
                        const productName =
                            locale === "ur" ? prod.nameUr : prod.name;

                        const productDescription =
                            locale === "ur" ? prod.descUr : prod.desc;

                        const wood =
                            locale === "ur" ? prod.woodUr : prod.wood;

                        const finish =
                            locale === "ur" ? prod.finishUr : prod.finish;

                        const category = CATEGORIES.find(
                            (cat: any) => cat.id === prod.category
                        );

                        const categoryName = category
                            ? locale === "ur"
                                ? category.nameUr
                                : category.name
                            : "";

                        return (
                            <article
                                key={prod.id}
                                className="
                            group
                            w-full
                            min-w-0
                            overflow-hidden
                            rounded-sm
                            border
                            border-border
                            bg-surface
                            flex
                            flex-col
                        "
                            >
                                {/* Product Image */}
                                <Link
                                    href={`/${locale}/products/item/${prod.id}`}
                                    className="relative block w-full aspect-[4/3] overflow-hidden bg-surface-secondary"
                                >
                                    <Image
                                        src={`/portfolio/${prod.image}`}
                                        alt={productName}
                                        fill
                                        sizes="
                                    (max-width: 639px) 100vw,
                                    (max-width: 1023px) 50vw,
                                    33vw
                                "
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    <span className="absolute top-3 right-3 z-10 max-w-[70%] truncate text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-primary text-primary-foreground rounded-xs shadow">
                                        {wood}
                                    </span>
                                </Link>

                                {/* Product Content */}
                                <div className="flex flex-1 flex-col">
                                    <div className="p-4 sm:p-5 lg:p-6">
                                        <span className="block mb-1 text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-accent truncate">
                                            {categoryName}
                                        </span>

                                        <Link
                                            href={`/${locale}/products/item/${prod.id}`}
                                            className="block font-serif text-lg sm:text-xl font-bold leading-tight hover:text-primary transition-colors break-words"
                                        >
                                            {productName}
                                        </Link>

                                        <p className="mt-2 text-xs leading-relaxed text-muted break-words">
                                            {productDescription}
                                        </p>

                                        <div className="mt-4 space-y-1 text-[10px] sm:text-[11px] text-muted-foreground font-mono">
                                            <div className="break-words">
                                                {t.dimensions}: {prod.dimensions}
                                            </div>

                                            <div className="break-words">
                                                {t.finish}: {finish}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Footer */}
                                    <div className="mt-auto px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="min-w-0 truncate text-lg sm:text-xl font-serif font-bold text-primary">
                                                {prod.price}
                                            </span>

                                            <Link
                                                href={`/${locale}/products/item/${prod.id}`}
                                                className="shrink-0 bg-primary hover:bg-accent text-primary-foreground text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-2 rounded-sm transition-colors uppercase tracking-wider"
                                            >
                                                {t.details}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}
        </main>
    );
}