import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { getContent } from "@/lib/i18n";
import { Locale } from "@/config/locales";
import { CATEGORIES, PRODUCTS } from "@/data/constant";
import { CNCWoodGraphic } from "@/components/home/CNCWoodGraphic";

type ProductDetailPageProps = {
    locale: Locale;
    product: any;
    t: ReturnType<typeof getContent>;
};

export default async function ProductDetailPage({
    locale,
    product,
    t,
}: ProductDetailPageProps) {



    if (!product) {
        notFound();
    }

    const category = CATEGORIES.find(
        (cat) => cat.id === product.category
    );

    const productName =
        locale === "ur" ? product.nameUr : product.name;

    const productDescription =
        locale === "ur" ? product.descUr : product.desc;

    const wood =
        locale === "ur" ? product.woodUr : product.wood;

    const finish =
        locale === "ur" ? product.finishUr : product.finish;

    const categoryName = category
        ? locale === "ur"
            ? category.nameUr
            : category.name
        : "";

    const features =
        locale === "ur"
            ? product.featuresUr
            : product.features;

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Back to Products */}
            <Link
                href={`/${locale}/products`}
                className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-amber-600 mb-8"
            >
                <ArrowLeft className="w-4 h-4" />
                {t.backToProducts}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Preview */}
                <div className="lg:col-span-7">
                    <div className="aspect-4/3 rounded-sm border overflow-hidden bg-white border-stone-300 shadow-xl">
                        <CNCWoodGraphic pattern={product.bgSvg} />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {["radial", "waves", "lattice"].map((pattern) => (
                            <div
                                key={pattern}
                                className="aspect-4/3 rounded-sm overflow-hidden border border-stone-700 cursor-pointer opacity-75 hover:opacity-100"
                            >
                                <CNCWoodGraphic pattern={pattern} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="lg:col-span-5 space-y-6">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-700">
                            {categoryName}
                        </span>

                        <h1 className="font-serif text-3xl font-bold mt-1">
                            {productName}
                        </h1>

                        <div className="text-2xl font-serif font-bold text-amber-700 mt-2">
                            {product.price}
                        </div>
                    </div>

                    <p className="text-xs leading-relaxed text-stone-700">
                        {productDescription}
                    </p>

                    {/* Specifications */}
                    <div className="p-4 rounded-sm border space-y-2 text-xs font-mono bg-stone-100 border-stone-200">
                        <div className="flex justify-between gap-4">
                            <span className="text-stone-500">
                                {t.standardTimber}:
                            </span>

                            <span className="font-semibold text-right">
                                {wood}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4">
                            <span className="text-stone-500">
                                {t.defaultDimensions}:
                            </span>

                            <span className="font-semibold text-right">
                                {product.dimensions}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4">
                            <span className="text-stone-500">
                                {t.protectiveCoating}:
                            </span>

                            <span className="font-semibold text-right">
                                {finish}
                            </span>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider">
                            {t.engineeringFeatures}
                        </h4>

                        <ul className="space-y-1.5">
                            {features?.map((feature: any, index: number) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 text-xs text-stone-500"
                                >
                                    <Check className="w-3.5 h-3.5 text-amber-600" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-stone-200 space-y-3">
                        <Link
                            href={`/${locale}/custom`}
                            className="w-full inline-flex justify-center bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-sm text-xs uppercase tracking-wider transition-colors shadow-md"
                        >
                            {t.requestThis}
                        </Link>

                        <p className="text-[11px] text-center text-stone-500">
                            {t.customScalingHint}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}