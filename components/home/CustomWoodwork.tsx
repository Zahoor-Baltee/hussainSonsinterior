'use client'
import { Locale } from '@/config/locales';
import { getContent } from '@/lib/i18n';
import { Check, CheckCircle2, Sliders } from 'lucide-react';

import React, { useState } from 'react'
type CustomWoodworkProps = {
    locale: Locale;
};
const CustomWoodwork = ({ locale }: CustomWoodworkProps) => {
    // Custom Quote Form State
    const [customForm, setCustomForm] = useState({
        wood: 'Oak',
        finish: 'Matte Oil',
        width: 1000,
        height: 800,
        depth: 40,
        notes: '',
        submitted: false
    });
    const estimatedPrice = Math.round(
        ((customForm.width * customForm.height * customForm.depth) / 100000) * (customForm.wood === 'Walnut' ? 1.8 : customForm.wood === 'Teak' ? 2.2 : 1.4) + 120
    );
    const content = getContent(locale);
    return (
        <section className="py-20 relative overflow-hidden bg-background text-foreground transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-sm border p-8 sm:p-12 bg-surface border-border shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-6">
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                                {content.customSectionTag}
                            </span>

                            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                                {content.customDesignTitle}
                            </h2>

                            <p className="text-sm leading-relaxed text-muted">
                                {content.customDesignDescription}
                            </p>

                            <ul className="space-y-3 pt-2">
                                {[
                                    content.customSupportFormats,
                                    content.customDepthRouting,
                                    content.customFinishes,
                                    content.customLogistics,
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-xs font-medium"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Interactive Spec Estimator Form */}
                        <div className="lg:col-span-7 p-6 sm:p-8 rounded-sm border bg-surface-secondary border-border">
                            <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
                                <Sliders className="w-5 h-5 text-primary" />
                                {content.quoteHeader}
                            </h3>

                            {customForm.submitted ? (
                                <div className="p-8 text-center space-y-4">
                                    <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
                                        <Check className="w-6 h-6" />
                                    </div>

                                    <h4 className="font-serif text-xl font-bold">
                                        {content.customRequestReceived}
                                    </h4>

                                    <p className="text-xs text-muted-foreground max-w-md mx-auto">
                                        {content.customRequestReview}
                                    </p>

                                    <button
                                        onClick={() =>
                                            setCustomForm({
                                                ...customForm,
                                                submitted: false,
                                            })
                                        }
                                        className="text-xs text-primary underline font-semibold"
                                    >
                                        {content.submitAnotherSpecification}
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();

                                        setCustomForm({
                                            ...customForm,
                                            submitted: true,
                                        });
                                    }}
                                    className="space-y-5"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        {/* Material */}
                                        <div>
                                            <label className="block text-xs font-semibold mb-1">
                                                {content.materialLbl}
                                            </label>

                                            <select
                                                value={customForm.wood}
                                                onChange={(e) =>
                                                    setCustomForm({
                                                        ...customForm,
                                                        wood: e.target.value,
                                                    })
                                                }
                                                className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground"
                                            >
                                                <option value="Oak">
                                                    {content.americanWhiteOak}
                                                </option>

                                                <option value="Walnut">
                                                    {content.blackWalnut}
                                                </option>

                                                <option value="Teak">
                                                    {content.burmeseTeak}
                                                </option>

                                                <option value="Ash">
                                                    {content.europeanAsh}
                                                </option>

                                                <option value="MDF">
                                                    {content.moistureResistantMdf}
                                                </option>
                                            </select>
                                        </div>

                                        {/* Finish */}
                                        <div>
                                            <label className="block text-xs font-semibold mb-1">
                                                {content.finishLbl}
                                            </label>

                                            <select
                                                value={customForm.finish}
                                                onChange={(e) =>
                                                    setCustomForm({
                                                        ...customForm,
                                                        finish: e.target.value,
                                                    })
                                                }
                                                className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground"
                                            >
                                                <option value="Matte Oil">
                                                    {content.naturalMatteHardWax}
                                                </option>

                                                <option value="Satin Poly">
                                                    {content.satinClearPolyurethane}
                                                </option>

                                                <option value="Dark Stain">
                                                    {content.deepEspressoStain}
                                                </option>

                                                <option value="Raw">
                                                    {content.rawSmoothSanded}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Dimensions Sliders */}
                                    <div className="space-y-3 pt-2">
                                        <label className="block text-xs font-semibold">
                                            {content.dimensionsLbl}
                                        </label>

                                        <div className="grid grid-cols-3 gap-3">

                                            {/* Width */}
                                            <div>
                                                <span className="text-[10px] text-muted-foreground block">
                                                    {content.width}: {customForm.width} mm
                                                </span>

                                                <input
                                                    type="range"
                                                    min="300"
                                                    max="3000"
                                                    step="50"
                                                    value={customForm.width}
                                                    onChange={(e) =>
                                                        setCustomForm({
                                                            ...customForm,
                                                            width: Number(e.target.value),
                                                        })
                                                    }
                                                    className="w-full accent-primary"
                                                />
                                            </div>

                                            {/* Height */}
                                            <div>
                                                <span className="text-[10px] text-muted-foreground block">
                                                    {content.height}: {customForm.height} mm
                                                </span>

                                                <input
                                                    type="range"
                                                    min="300"
                                                    max="3000"
                                                    step="50"
                                                    value={customForm.height}
                                                    onChange={(e) =>
                                                        setCustomForm({
                                                            ...customForm,
                                                            height: Number(e.target.value),
                                                        })
                                                    }
                                                    className="w-full accent-primary"
                                                />
                                            </div>

                                            {/* Thickness */}
                                            <div>
                                                <span className="text-[10px] text-muted-foreground block">
                                                    {content.thickness}: {customForm.depth} mm
                                                </span>

                                                <input
                                                    type="range"
                                                    min="15"
                                                    max="100"
                                                    step="5"
                                                    value={customForm.depth}
                                                    onChange={(e) =>
                                                        setCustomForm({
                                                            ...customForm,
                                                            depth: Number(e.target.value),
                                                        })
                                                    }
                                                    className="w-full accent-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Notes */}
                                    <div>
                                        <label className="block text-xs font-semibold mb-1">
                                            {content.projectNotes}
                                        </label>

                                        <textarea
                                            rows={3}
                                            placeholder={content.projectNotesPlaceholder}
                                            value={customForm.notes}
                                            onChange={(e) =>
                                                setCustomForm({
                                                    ...customForm,
                                                    notes: e.target.value,
                                                })
                                            }
                                            className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground"
                                        />
                                    </div>

                                    {/* Instant Price Preview */}
                                    <div className="p-4 rounded-sm flex items-center justify-between border bg-surface border-border">
                                        <div>
                                            <span className="text-xs text-muted-foreground block">
                                                {content.customQuoteEst}
                                            </span>

                                            <span className="text-xl font-serif font-bold text-primary">
                                                ${estimatedPrice} - $
                                                {Math.round(estimatedPrice * 1.25)}
                                            </span>
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-primary hover:bg-accent text-primary-foreground text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-sm transition-colors"
                                        >
                                            {content.submitRequest}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomWoodwork
