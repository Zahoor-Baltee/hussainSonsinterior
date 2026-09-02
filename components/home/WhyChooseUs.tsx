import { Locale } from '@/config/locales';
import { VALUE_PROPOSITIONS } from '@/data/constant';
type WhyChooseUsProps = {
    locale: Locale;
};
const WhyChooseUs = ({ locale }: WhyChooseUsProps) => {
    return (
        <section className="py-16 border-y bg-stone-900 text-stone-100 border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {VALUE_PROPOSITIONS.map((vp) => {
                        const Icon = vp.icon;

                        return (
                            <div key={vp.id} className="space-y-3">
                                <div className="p-3 bg-amber-600/20 text-amber-400 w-fit rounded-sm">
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="font-serif text-lg font-bold">
                                    {locale === "ur" ? vp.titleUr : vp.title}
                                </h3>

                                <p className="text-xs leading-relaxed text-stone-400">
                                    {locale === "ur" ? vp.descUr : vp.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
