import { Locale } from '@/config/locales';
import { FEATURED_WORKS } from '@/data/constant';
import { getContent } from '@/lib/i18n';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { CNCWoodGraphic } from './CNCWoodGraphic';


type PortfolioGalleryProps = {
    locale: Locale;
};
const PortfolioGallery = ({ locale }: PortfolioGalleryProps) => {
    const content = getContent(locale);
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                            {content.selectedWorks}
                        </span>

                        <h2 className="font-serif text-3xl font-bold mt-1">
                            {content.galleryTitle}
                        </h2>
                    </div>

                    <Link
                        href={`/${locale}/gallery`}
                        className="mt-4 md:mt-0 text-sm font-semibold text-amber-700 flex items-center gap-1 hover:underline"
                    >
                        {content.viewFullGallery}
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {FEATURED_WORKS.map((item) => (
                        <Link
                            key={item.id}
                            href={`/${locale}/gallery`}
                            className="group relative rounded-sm overflow-hidden border border-stone-800 aspect-4/3 cursor-pointer"
                        >
                            <CNCWoodGraphic pattern={item.pattern} />

                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">
                                    {locale === "ur" ? item.locationUr : item.location}
                                </span>

                                <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                                    {locale === "ur" ? item.titleUr : item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default PortfolioGallery
