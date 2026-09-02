import { Locale } from '@/config/locales';
import { getContent } from '@/lib/i18n';

type BusinessIntroProps = {
    locale: Locale;
};
const BusinessIntro = ({ locale }: BusinessIntroProps) => {
    const content = getContent(locale);
    return (
        <section className="py-16 border-y bg-amber-900/5 border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                        {content.heritageTag}
                    </span>

                    <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                        {content.heritageTitle}
                    </h2>

                    <p className="text-base leading-relaxed text-stone-700">
                        {content.heritageDescription}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BusinessIntro
