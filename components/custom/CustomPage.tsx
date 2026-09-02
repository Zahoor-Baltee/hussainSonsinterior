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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                    {t.customStudioTag}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
                    {t.customWoodworkTitle}
                </h1>

                <p className="text-sm mt-3 leading-relaxed text-stone-700">
                    {t.customStudioDescription}
                </p>
            </div>

            {/* Workflow Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {CUSTOM_WORKFLOW.map((workflow) => (
                    <div
                        key={workflow.id}
                        className="p-6 rounded-sm border bg-white border-stone-200 shadow-sm"
                    >
                        <span className="text-2xl font-serif font-bold text-amber-600 block mb-2">
                            {workflow.num}
                        </span>

                        <h3 className="font-serif text-lg font-bold mb-2">
                            {locale === "ur"
                                ? workflow.titleUr
                                : workflow.title}
                        </h3>

                        <p className="text-xs leading-relaxed text-stone-600">
                            {locale === "ur"
                                ? workflow.descUr
                                : workflow.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Quote Tool */}
            <div className="p-8 sm:p-12 rounded-sm border bg-white border-stone-300 shadow-xl">
                <h2 className="font-serif text-2xl font-bold mb-6">
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
                            <label className="block text-xs font-semibold mb-2">
                                {t.projectCategory}
                            </label>

                            <select className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800">
                                <option>{t.customCeilingPanels}</option>
                                <option>{t.bespokeCarvedDoors}</option>
                                <option>{t.parametricWallPanelling}</option>
                                <option>{t.customFretwork}</option>
                                <option>{t.largeMirrorFrame}</option>
                            </select>
                        </div>

                        {/* Wood Species */}
                        <div>
                            <label className="block text-xs font-semibold mb-2">
                                {t.targetWoodSpecies}
                            </label>

                            <select className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800">
                                <option>{t.americanBlackWalnut}</option>
                                <option>{t.whiteOak}</option>
                                <option>{t.burmeseTeak}</option>
                                <option>{t.europeanAsh}</option>
                            </select>
                        </div>
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-xs font-semibold mb-2">
                            {t.uploadSketch}
                        </label>

                        <label className="border-2 border-dashed p-8 text-center rounded-sm cursor-pointer border-stone-300 hover:border-amber-600 block">
                            <Sliders className="w-8 h-8 text-amber-600 mx-auto mb-2" />

                            <span className="text-xs font-semibold block">
                                {t.uploadDrawings}
                            </span>

                            <span className="text-[10px] text-stone-500 mt-1 block">
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
                        className="bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm"
                    >
                        {t.submitCustomSpecification}
                    </button>
                </form>
            </div>
        </main>
    );
}