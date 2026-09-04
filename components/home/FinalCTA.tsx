import { Locale } from '@/config/locales';
import { getContent } from '@/lib/i18n';
import Link from 'next/link';

type FinalCTAProps = {
    locale: Locale;
};
const FinalCTA = ({ locale }: FinalCTAProps) => {
    const t = getContent(locale);
    return (
        <section className="py-20 bg-primary/5 border-y border-border text-primary relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
                <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
                    {t.ctaTitle}
                </h2>

                <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto">
                    {t.ctaDescription}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link
                        href={`/${locale}/products`}
                        className="bg-primary hover:bg-accent text-primary-foreground font-medium px-7 py-3.5 rounded-sm shadow-md transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                    >
                        {t.exploreProducts}
                    </Link>

                    <Link
                        href={`/${locale}/custom`}
                        className="border border-border bg-surface hover:bg-surface-secondary text-foreground font-medium px-7 py-3.5 rounded-sm transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                    >
                        {t.requestCustom}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA
