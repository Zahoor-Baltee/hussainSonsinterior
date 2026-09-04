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
        <section className="relative overflow-hidden bg-background text-foreground py-16 lg:py-24 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Hero Text */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Hero Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-primary/30 text-primary bg-primary/10">
                            <Sparkles className="w-3.5 h-3.5" />
                            {content.heroBadge}
                        </div>

                        {/* Hero Heading */}
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                            {content.tagline}
                        </h1>

                        {/* Hero Description */}
                        <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-muted">
                            {content.heroSub}
                        </p>

                        {/* CTA Buttons */}
                        <div className="pt-4 flex flex-col sm:flex-row gap-4">

                            <Link
                                href={`/${locale}/products`}
                                className="bg-primary hover:bg-accent text-primary-foreground font-medium px-7 py-3.5 rounded-sm shadow-md transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                            >
                                {content.exploreProducts}

                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href={`/${locale}/custom`}
                                className="border border-border bg-surface hover:bg-surface-secondary text-foreground font-medium px-7 py-3.5 rounded-sm transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                            >
                                <Wrench className="w-4 h-4 text-primary" />

                                {content.requestCustom}
                            </Link>

                        </div>

                        {/* Dual Business Path Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">

                            <div>
                                <h4 className="font-semibold text-sm flex items-center gap-1.5 text-primary">
                                    <Box className="w-4 h-4" />
                                    {content.readyMadePathTitle}
                                </h4>

                                <p className="text-xs text-muted-foreground mt-1">
                                    {content.readyMadePathDescription}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm flex items-center gap-1.5 text-primary">
                                    <Ruler className="w-4 h-4" />
                                    {content.customPathTitle}
                                </h4>

                                <p className="text-xs text-muted-foreground mt-1">
                                    {content.customPathDescription}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Hero Visual Graphic */}
                    <div className="lg:col-span-5 relative">

                        <div className="aspect-4/3 sm:aspect-square rounded-sm shadow-2xl overflow-hidden border border-border">
                            <CNCWoodGraphic
                                pattern="radial"
                            />
                        </div>

                        {/* Floating Metric Badge */}
                        <div className="absolute -bottom-6 -left-6 p-4 rounded-sm shadow-xl border hidden sm:block bg-surface border-border">
                            <div className="flex items-center gap-3">

                                <div className="p-2.5 bg-primary/10 text-primary rounded-sm">
                                    <Compass className="w-6 h-6" />
                                </div>

                                <div>
                                    <span className="block text-2xl font-bold font-serif leading-none text-foreground">
                                        0.05 mm
                                    </span>

                                    <span className="text-xs text-muted">
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
