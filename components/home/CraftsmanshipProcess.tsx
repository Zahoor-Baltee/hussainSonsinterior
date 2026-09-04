import { Locale } from '@/config/locales';
import { PROCESS_STEPS } from '@/data/constant';
import { getContent } from '@/lib/i18n';
type CraftsmanshipProcessProps = {
    locale: Locale;
};
const CraftsmanshipProcess = ({ locale }: CraftsmanshipProcessProps) => {
    const content = getContent(locale);
    return (
        <section className="py-20 border-t bg-surface-secondary/40 border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {content.methodology}
                    </span>

                    <h2 className="font-serif text-3xl font-bold mt-1 text-foreground">
                        {content.processTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {PROCESS_STEPS.map((ps) => (
                        <div
                            key={ps.step}
                            className="p-6 rounded-sm border relative bg-surface border-border"
                        >
                            <span className="text-3xl font-serif font-bold text-primary/40 block mb-2">
                                {ps.step}
                            </span>

                            <h3 className="font-serif text-base font-bold mb-2 text-foreground">
                                {locale === "ur" ? ps.titleUr : ps.title}
                            </h3>

                            <p className="text-xs leading-relaxed text-muted">
                                {locale === "ur" ? ps.descUr : ps.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CraftsmanshipProcess
