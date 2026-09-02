"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, HelpCircle } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/constant";
import { CNCWoodGraphic } from "../home/CNCWoodGraphic";


type ProductsPageProps = {
    locale: string;
    t: any;
};

export default function ProductsPage({
    locale,
    t,
}: ProductsPageProps) {
    const [selectedCategory, setSelectedCategory] = useState("all");
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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                    {t.readyMadeTitle}
                </h1>

                <p className="text-sm mt-2 text-stone-600">
                    {t.productsDescription}
                </p>
            </div>

            {/* Search & Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 pb-6 border-b border-stone-200">
                {/* Category Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                    <button
                        onClick={() => setSelectedCategory("all")}
                        className={`text-xs px-4 py-2 rounded-sm whitespace-nowrap font-medium transition-colors ${selectedCategory === "all"
                            ? "bg-amber-700 text-white"
                            : "bg-stone-200 text-stone-700"
                            }`}
                    >
                        {t.all}
                    </button>

                    {CATEGORIES.map((cat: any) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`text-xs px-4 py-2 rounded-sm whitespace-nowrap font-medium transition-colors ${selectedCategory === cat.id
                                ? "bg-amber-700 text-white"
                                : "bg-stone-200 text-stone-700"
                                }`}
                        >
                            {locale === "ur" ? cat.nameUr : cat.name}
                        </button>
                    ))}
                </div>

                {/* Search Box */}
                <div className="relative w-full md:w-64">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />

                    <input
                        type="text"
                        placeholder={t.searchProductsPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-xs pl-9 pr-3 py-2.5 rounded-sm border bg-white border-stone-300 text-stone-800"
                    />
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                    <HelpCircle className="w-12 h-12 text-stone-400 mx-auto mb-3" />

                    <h3 className="font-serif text-lg font-bold">
                        {t.noMatchingProducts}
                    </h3>

                    <p className="text-xs text-stone-500 mt-1">
                        {t.adjustProductFilters}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <div
                                key={prod.id}
                                className="rounded-sm border overflow-hidden flex flex-col justify-between transition-all bg-white border-stone-200 hover:shadow-xl"
                            >
                                <div>
                                    <div className="aspect-4/3 relative bg-stone-950">
                                        <CNCWoodGraphic pattern={prod.bgSvg} />

                                        <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-amber-700 text-white rounded-xs shadow">
                                            {wood}
                                        </span>
                                    </div>

                                    <div className="p-6">
                                        <span className="text-[10px] uppercase font-mono tracking-widest text-amber-600 block mb-1">
                                            {categoryName}
                                        </span>

                                        <Link
                                            href={`/${locale}/products/${prod.id}`}
                                            className="font-serif text-xl font-bold hover:text-amber-600"
                                        >
                                            {productName}
                                        </Link>

                                        <p className="text-xs leading-relaxed mt-2 text-stone-600">
                                            {productDescription}
                                        </p>

                                        <div className="mt-4 space-y-1 text-[11px] text-stone-500 font-mono">
                                            <div>
                                                {t.dimensions}: {prod.dimensions}
                                            </div>

                                            <div>
                                                {t.finish}: {finish}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-0 flex items-center justify-between border-t border-transparent">
                                    <span className="text-xl font-serif font-bold text-amber-700">
                                        {prod.price}
                                    </span>

                                    <Link
                                        href={`/${locale}/products/${prod.id}`}
                                        className="bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-sm transition-colors uppercase tracking-wider"
                                    >
                                        {t.details}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </main>
    );
}