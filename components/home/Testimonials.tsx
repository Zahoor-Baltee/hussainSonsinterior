import { Locale } from '@/config/locales';
import { TESTIMONIALS } from '@/data/constant';
import { getContent } from '@/lib/i18n';
type TestimonialsProps = {
    locale: Locale;
};
const Testimonials = ({ locale }: TestimonialsProps) => {
    const content = getContent(locale);
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-xl mx-auto mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                        {content.references}
                    </span>

                    <h2 className="font-serif text-3xl font-bold mt-1">
                        {content.testimonialsTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((test) => (
                        <div
                            key={test.id}
                            className="p-6 rounded-sm border flex flex-col justify-between bg-white border-stone-200 shadow-sm"
                        >
                            <p className="text-xs leading-relaxed italic text-stone-700">
                                "{locale === "ur" ? test.quoteUr : test.quote}"
                            </p>

                            <div className="mt-6 pt-4 border-t border-stone-100">
                                <h4 className="font-serif text-sm font-bold">
                                    {test.author}
                                </h4>

                                <span className="text-[11px] text-amber-700">
                                    {locale === "ur" ? test.roleUr : test.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonials
