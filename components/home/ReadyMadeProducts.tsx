import { Locale } from '@/config/locales';
import { PRODUCTS } from '@/data/constant';
import { getContent } from '@/lib/i18n';
import { CNCWoodGraphic } from './CNCWoodGraphic';
import Link from 'next/link';
type ReadyMadeProductsProps = {
    locale: Locale;
};
const ReadyMadeProducts = ({ locale }: ReadyMadeProductsProps) => {
    const content = getContent(locale);
    return (
        <section className="py-20 border-t bg-surface-secondary/60 border-border text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {content.readySectionTag}
                    </span>

                    <h2 className="font-serif text-3xl font-bold mt-1 text-foreground">
                        {content.readyMadeTitle}
                    </h2>

                    <p className="text-sm mt-2 text-muted">
                        {content.readyMadeSub}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.slice(0, 6).map((prod) => (
                        <div
                            key={prod.id}
                            className="rounded-sm border overflow-hidden transition-all duration-300 flex flex-col bg-surface border-border hover:shadow-xl text-foreground"
                        >
                            {/* Graphic Box */}
                            <div className="aspect-4/3 relative overflow-hidden bg-surface-secondary">
                                <CNCWoodGraphic pattern={prod.bgSvg} />

                                <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-primary text-primary-foreground rounded-xs shadow">
                                    {locale === "ur" ? prod.tagUr : prod.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                                        {locale === "ur" ? prod.woodUr : prod.wood}
                                    </div>

                                    <h3 className="font-serif text-lg font-bold mt-1 text-foreground hover:text-primary transition-colors">
                                        {locale === "ur" ? prod.nameUr : prod.name}
                                    </h3>

                                    <p className="text-xs leading-relaxed mt-2 line-clamp-2 text-muted">
                                        {locale === "ur" ? prod.descUr : prod.desc}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-muted-foreground block">
                                            {prod.startingAt}
                                        </span>

                                        <span className="text-xl font-serif font-bold text-primary">
                                            {prod.price}
                                        </span>
                                    </div>

                                    <Link
                                        href={`/${locale}/products/${prod.id}`}
                                        className="text-xs font-semibold px-4 py-2 rounded-sm border transition-colors border-border hover:bg-surface-secondary text-foreground"
                                    >
                                        {content.details}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ReadyMadeProducts
