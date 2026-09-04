import { Locale } from '@/config/locales';
import { getContent } from '@/lib/i18n';

type BusinessIntroProps = {
    locale: Locale;
};
const BusinessIntro = ({ locale }: BusinessIntroProps) => {
    const content = getContent(locale);
    return (
        <section className="py-16 border-y bg-primary/5 border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {content.heritageTag}
                    </span>

                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                        {content.heritageTitle}
                    </h2>

                    <p className="text-base leading-relaxed text-muted">
                        {content.heritageDescription}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BusinessIntro
