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
        <section className="py-20 border-t bg-surface-secondary/60 border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {t.faqTag}
                    </span>

                    <h2 className="font-serif text-3xl font-bold mt-1 text-foreground">
                        {t.faqTitle}
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq) => (
                        <details
                            key={faq.id}
                            className="group rounded-sm border transition-colors bg-surface border-border"
                        >
                            <summary className="cursor-pointer p-5 text-sm font-semibold flex items-center justify-between font-serif text-foreground">
                                <span>
                                    {locale === "ur" ? faq.qUr : faq.q}
                                </span>

                                <ChevronDown className="w-4 h-4 text-primary transition-transform group-open:rotate-180" />
                            </summary>

                            <div className="px-5 pb-5 text-xs leading-relaxed border-t pt-3 border-border text-muted">
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
