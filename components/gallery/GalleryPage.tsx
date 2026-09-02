import { Locale } from "@/config/locales";
import { GALLERY_ITEMS } from "@/data/constant";
import { CNCWoodGraphic } from "../home/CNCWoodGraphic";

type GalleryPageProps = {
    locale: Locale;
    t: any;
};

export default function GalleryPage({
    locale,
    t,
}: GalleryPageProps) {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-10 text-center max-w-2xl mx-auto">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                    {t.portfolioTag}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
                    {t.galleryTitle}
                </h1>

                <p className="text-sm mt-2 text-stone-600">
                    {t.galleryDescription}
                </p>
            </div>

            {/* Masonry-Style Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GALLERY_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className="group relative rounded-sm overflow-hidden border border-stone-800 aspect-4/3 cursor-pointer shadow-md"
                    >
                        <CNCWoodGraphic pattern={item.pattern} />

                        <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                                {locale === "ur"
                                    ? item.categoryUr
                                    : item.category}
                            </span>

                            <h3 className="font-serif text-lg font-bold text-white mt-1">
                                {locale === "ur"
                                    ? item.titleUr
                                    : item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}