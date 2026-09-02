import { Locale } from '@/config/locales';
import { getContent } from '@/lib/i18n';
import Link from 'next/link';

type FinalCTAProps = {
    locale: Locale;
};
const FinalCTA = ({ locale }: FinalCTAProps) => {
    const t = getContent(locale);
    return (
        <section className="py-20 bg-amber-900 text-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
                <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
                    {t.ctaTitle}
                </h2>

                <p className="text-sm sm:text-base text-amber-100/80 max-w-2xl mx-auto">
                    {t.ctaDescription}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link
                        href={`/${locale}/products`}
                        className="bg-white text-stone-950 font-semibold px-8 py-3.5 rounded-sm hover:bg-amber-100 transition-colors uppercase text-xs tracking-wider"
                    >
                        {t.exploreProducts}
                    </Link>

                    <Link
                        href={`/${locale}/custom`}
                        className="border border-white/40 text-white font-semibold px-8 py-3.5 rounded-sm hover:bg-white/10 transition-colors uppercase text-xs tracking-wider"
                    >
                        {t.requestCustom}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA
