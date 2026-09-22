import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { getContent } from "@/lib/i18n";
import { Locale } from "@/config/locales";
import { CATEGORIES, PRODUCTS } from "@/data/constant";
import { CNCWoodGraphic } from "@/components/home/CNCWoodGraphic";
import Image from "next/image";

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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background text-foreground transition-colors">
            {/* Back to Products */}
            <Link
                href={`/${locale}/products`}
                className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                {t.backToProducts}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Preview */}
                <div className="lg:col-span-7">
                    <div className="aspect-4/3 relative rounded-sm border overflow-hidden bg-surface border-border shadow-xl">
                        {/* <CNCWoodGraphic pattern={product.bgSvg} /> */}
                        <Image
                            src={`/portfolio/${product.image}`}
                            alt={productName}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* <div className="grid grid-cols-3 gap-4 mt-4">
                        {["radial", "waves", "lattice"].map((pattern) => (
                            <div
                                key={pattern}
                                className="aspect-4/3 rounded-sm overflow-hidden border border-border cursor-pointer opacity-75 hover:opacity-100"
                            >
                                <CNCWoodGraphic pattern={pattern} />
                            </div>
                        ))}
                    </div> */}
                </div>

                {/* Product Details */}
                <div className="lg:col-span-5 space-y-6">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-primary">
                            {categoryName}
                        </span>

                        <h1 className="font-serif text-3xl font-bold mt-1 text-foreground">
                            {productName}
                        </h1>

                        <div className="text-2xl font-serif font-bold text-primary mt-2">
                            {product.price}
                        </div>
                    </div>

                    <p className="text-xs leading-relaxed text-muted">
                        {productDescription}
                    </p>

                    {/* Specifications */}
                    <div className="p-4 rounded-sm border space-y-2 text-xs font-mono bg-surface-secondary border-border">
                        <div className="flex justify-between gap-4">
                            <span className="text-muted-foreground">
                                {t.standardTimber}:
                            </span>

                            <span className="font-semibold text-right text-foreground">
                                {wood}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4">
                            <span className="text-muted-foreground">
                                {t.defaultDimensions}:
                            </span>

                            <span className="font-semibold text-right text-foreground">
                                {product.dimensions}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4">
                            <span className="text-muted-foreground">
                                {t.protectiveCoating}:
                            </span>

                            <span className="font-semibold text-right text-foreground">
                                {finish}
                            </span>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                            {t.engineeringFeatures}
                        </h4>

                        <ul className="space-y-1.5">
                            {features?.map((feature: any, index: number) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 text-xs text-muted"
                                >
                                    <Check className="w-3.5 h-3.5 text-accent" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-border space-y-3">
                        <Link
                            href={`#`}
                            // href={`/${locale}/custom`}
                            className="w-full inline-flex justify-center bg-primary hover:bg-accent text-primary-foreground font-semibold py-3.5 rounded-sm text-xs uppercase tracking-wider transition-colors shadow-md"
                        >
                            {t.requestThis}
                        </Link>

                        <p className="text-[11px] text-center text-muted-foreground">
                            {t.customScalingHint}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}