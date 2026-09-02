import { Locale } from '@/config/locales';
import { FAQS } from '@/data/constant';
import { getContent } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';
type FAQProps = {
    locale: Locale;
};
const FAQ = ({ locale }: FAQProps) => {
    const t = getContent(locale);
    return (
        <section className="py-20 border-t bg-stone-100/60 border-stone-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                        {t.faqTag}
                    </span>

                    <h2 className="font-serif text-3xl font-bold mt-1">
                        {t.faqTitle}
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq) => (
                        <details
                            key={faq.id}
                            className="group rounded-sm border transition-colors bg-white border-stone-200"
                        >
                            <summary className="cursor-pointer p-5 text-sm font-semibold flex items-center justify-between font-serif">
                                <span>
                                    {locale === "ur" ? faq.qUr : faq.q}
                                </span>

                                <ChevronDown className="w-4 h-4 text-amber-600 transition-transform group-open:rotate-180" />
                            </summary>

                            <div className="px-5 pb-5 text-xs leading-relaxed border-t pt-3 border-stone-100 text-stone-600">
                                {locale === "ur" ? faq.aUr : faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
