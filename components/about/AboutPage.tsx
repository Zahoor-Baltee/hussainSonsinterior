import { Locale } from "@/config/locales";

type AboutPageProps = {
    locale: Locale;
    t: ReturnType<typeof import("@/lib/i18n").getContent>;
};

export default function AboutPage({ t }: AboutPageProps) {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl space-y-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-500">
                    {t.aboutHeritage}
                </span>

                <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                    {t.aboutTitle}
                </h1>

                <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
                    {t.aboutDescriptionOne}
                </p>

                <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
                    {t.aboutDescriptionTwo}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-stone-200 dark:border-stone-800">
                <div>
                    <span className="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500 block">
                        15+ {t.years}
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                        {t.cncWoodworkingExperience}
                    </span>
                </div>

                <div>
                    <span className="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500 block">
                        1,200+
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                        {t.bespokeArchitecturalProjects}
                    </span>
                </div>

                <div>
                    <span className="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500 block">
                        0.05 mm
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                        {t.machiningTolerancePrecision}
                    </span>
                </div>
            </div>
        </main>
    );
}