import { Locale } from '@/config/locales';
import { CATEGORIES } from '@/data/constant';
import { getContent } from '@/lib/i18n';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
type ProductCategoriesProps = {
    locale: Locale;
};
const ProductCategories = ({ locale }: ProductCategoriesProps) => {
    const content = getContent(locale);
    return (
        <section className="py-20 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                            {content.catalogueBreakdown}
                        </span>

                        <h2 className="font-serif text-3xl font-bold mt-1 text-foreground">
                            {content.browseCategories}
                        </h2>
                    </div>

                    <Link
                        href={`/${locale}/products`}
                        className="mt-4 md:mt-0 text-sm font-semibold text-primary hover:text-accent flex items-center gap-1 hover:underline"
                    >
                        {content.viewAllCollections}
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;

                        return (
                            <Link
                                key={cat.id}
                                href={`/${locale}/products?category=${cat.id}`}
                                className="group cursor-pointer p-6 rounded-sm border border-border bg-surface text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-surface-secondary text-muted-foreground">
                                        {cat.count} {content.designs}
                                    </span>
                                </div>

                                <h3 className="font-serif text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                                    {locale === "ur" ? cat.nameUr : cat.name}
                                </h3>

                                <p className="text-xs leading-relaxed mt-2 text-muted">
                                    {locale === "ur" ? cat.desc : cat.desc}
                                    {/* {locale === "ur" ? cat.descUr : cat.desc} */}
                                </p>

                                <div className="mt-4 pt-4 border-t border-border flex items-center text-xs font-semibold text-primary gap-1 group-hover:translate-x-1 transition-transform">
                                    {content.exploreCollection}
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductCategories
