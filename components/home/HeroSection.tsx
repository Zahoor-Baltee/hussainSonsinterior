import { Locale } from "@/config/locales";
import { getContent } from "@/lib/i18n";
import { ArrowRight, Box, Compass, Ruler, Sparkles, Wrench } from "lucide-react"
import Link from "next/link";
import { CNCWoodGraphic } from "./CNCWoodGraphic";

type HeroProps = {
    locale: Locale;
};
const HeroSection = ({ locale }: HeroProps) => {
    const content = getContent(locale);

    return (
        <section className="relative overflow-hidden py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Hero Text */}
                    <div className="lg:col-span-7 space-y-6">

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-amber-600/30 text-amber-700 dark:text-amber-400 bg-amber-500/10">
                            <Sparkles className="w-3.5 h-3.5" />
                            {content.heroBadge}
                        </div>

                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                            {content.tagline}
                        </h1>

                        <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-stone-700 dark:text-stone-300">
                            {content.heroSub}
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">

                            <Link
                                href={`/${locale}/products`}
                                className="bg-amber-700 hover:bg-amber-600  font-medium px-7 py-3.5 rounded-sm shadow-md transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                            >
                                {content.exploreProducts}
                                <ArrowRight className="w-4 h-4 text-white" />
                            </Link>

                            <Link
                                href={`/${locale}/custom`}
                                className="border font-medium px-7 py-3.5 rounded-sm transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider border-stone-300 hover:bg-stone-100 text-stone-800 dark:border-stone-700 dark:hover:bg-stone-900 dark:text-stone-200"
                            >
                                <Wrench className="w-4 h-4 text-amber-600" />
                                {content.requestCustom}
                            </Link>

                        </div>

                        {/* Dual Business Path Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-stone-200 dark:border-stone-800">

                            <div>
                                <h4 className="font-semibold text-sm flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                                    <Box className="w-4 h-4" />
                                    {content.readyMadePathTitle}
                                </h4>

                                <p className="text-xs text-stone-500 mt-1">
                                    {content.readyMadePathDescription}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                                    <Ruler className="w-4 h-4" />
                                    {content.customPathTitle}
                                </h4>

                                <p className="text-xs text-stone-500 mt-1">
                                    {content.customPathDescription}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Hero Visual Graphic */}
                    <div className="lg:col-span-5 relative">

                        <div className="aspect-4/3 sm:aspect-square rounded-sm shadow-2xl overflow-hidden border border-stone-300 dark:border-stone-800">
                            <CNCWoodGraphic
                                pattern="radial"
                            />
                        </div>

                        {/* Floating Metric Badge */}
                        <div className="absolute -bottom-6 -left-6 p-4 rounded-sm shadow-xl border hidden sm:block bg-white border-stone-200 dark:bg-stone-900 dark:border-stone-800">
                            <div className="flex items-center gap-3">

                                <div className="p-2.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-sm">
                                    <Compass className="w-6 h-6" />
                                </div>

                                <div>
                                    <span className="block text-2xl font-bold font-serif leading-none">
                                        0.05 mm
                                    </span>

                                    <span className="text-xs text-stone-500">
                                        {content.cncTolerance}
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection
