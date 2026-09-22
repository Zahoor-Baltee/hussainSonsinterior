"use client";

import { CUSTOM_WORKFLOW } from "@/data/constant";
import { Sliders } from "lucide-react";


type CustomPageProps = {
    locale: string;
    t: any;
};

export default function CustomPage({
    locale,
    t,
}: CustomPageProps) {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background text-foreground transition-colors">
            <div className="max-w-3xl mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {t.customStudioTag}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-1 text-foreground">
                    {t.customWoodworkTitle}
                </h1>

                <p className="text-sm mt-3 leading-relaxed text-muted">
                    {t.customStudioDescription}
                </p>
            </div>

            {/* Workflow Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {CUSTOM_WORKFLOW.map((workflow) => (
                    <div
                        key={workflow.id}
                        className="p-6 rounded-sm border bg-surface border-border shadow-sm"
                    >
                        <span className="text-2xl font-serif font-bold text-accent block mb-2">
                            {workflow.num}
                        </span>

                        <h3 className="font-serif text-lg font-bold mb-2 text-foreground">
                            {locale === "ur"
                                ? workflow.titleUr
                                : workflow.title}
                        </h3>

                        <p className="text-xs leading-relaxed text-muted">
                            {locale === "ur"
                                ? workflow.descUr
                                : workflow.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Quote Tool */}
            <div className="p-8 sm:p-12 rounded-sm border bg-surface border-border shadow-xl">
                <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">
                    {t.quoteHeader}
                </h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Project Category */}
                        <div>
                            <label className="block text-xs font-semibold mb-2 text-foreground">
                                {t.projectCategory}
                            </label>

                            <select className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                                <option>{t.customCeilingPanels}</option>
                                <option>{t.bespokeCarvedDoors}</option>
                                <option>{t.parametricWallPanelling}</option>
                                <option>{t.customFretwork}</option>
                                <option>{t.largeMirrorFrame}</option>
                            </select>
                        </div>

                        {/* Wood Species */}
                        <div>
                            <label className="block text-xs font-semibold mb-2 text-foreground">
                                {t.targetWoodSpecies}
                            </label>

                            <select className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                                <option>{t.americanBlackWalnut}</option>
                                <option>{t.whiteOak}</option>
                                <option>{t.burmeseTeak}</option>
                                <option>{t.europeanAsh}</option>
                            </select>
                        </div>
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-xs font-semibold mb-2 text-foreground">
                            {t.uploadSketch}
                        </label>

                        <label className="border-2 border-dashed p-8 text-center rounded-sm cursor-pointer border-border hover:border-primary block transition-colors">
                            <Sliders className="w-8 h-8 text-accent mx-auto mb-2" />

                            <span className="text-xs font-semibold block text-foreground">
                                {t.uploadDrawings}
                            </span>

                            <span className="text-[10px] text-muted-foreground mt-1 block">
                                {t.maximumFileSize}
                            </span>

                            <input
                                type="file"
                                accept=".dxf,.dwg,.ai,.pdf"
                                className="hidden"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary hover:bg-accent text-primary-foreground text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors"
                    >
                        {t.submitCustomSpecification}
                    </button>
                </form>
            </div>
        </main>
    );
}