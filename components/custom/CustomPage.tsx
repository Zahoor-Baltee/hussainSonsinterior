"use client";
import { CUSTOM_WORKFLOW, PRODUCTS } from "@/data/constant";
import { Sliders } from "lucide-react";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { supabase } from "@/lib/supabase";
type CustomPageProps = {
    locale: string;
    t: any;
    product?: string;
    category?: string
};
export default function CustomPage({
    locale,
    t,
    product,
    category
}: CustomPageProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);



    const hasProductAndCategory =
        Boolean(product?.trim()) && Boolean(category?.trim());
    const productName = PRODUCTS.find(
        (prod) => prod.params === product
    );

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        try {
            setIsLoading(true);

            const formData = new FormData(form);

            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const phone = formData.get("phone") as string;
            const notes = formData.get("notes") as string;

            // --------------------------------------------------
            // PRODUCT + CATEGORY FLOW
            // --------------------------------------------------
            if (hasProductAndCategory) {
                await emailjs.send(
                    "service_0zrjpds",
                    "template_9ca0fnh",
                    {
                        name,
                        email,
                        phone,
                        notes,
                        product,
                        category,
                    },
                    {
                        publicKey: "kCmRNovEbyNUXu2ql",
                    }
                );

                alert("Email sent successfully!");

                form.reset();

                return;
            }

            // --------------------------------------------------
            // CURRENT CUSTOM PROJECT FLOW
            // --------------------------------------------------

            const targetWoodSpecies =
                formData.get("targetWoodSpecies") as string;

            const projectCategory =
                formData.get("projectCategory") as string;

            const file = formData.get("uploadDrawings") as File | null;

            let uploadDrawings = "";

            // Upload drawing
            if (file && file.size > 0) {
                const allowedTypes = [
                    "image/jpeg",
                    "image/png",
                    "application/pdf",
                ];

                // 10 MB limit
                if (file.size > 10 * 1024 * 1024) {
                    alert("File size must be less than 10 MB.");
                    return;
                }

                // File type validation
                if (!allowedTypes.includes(file.type)) {
                    alert("Only JPG, PNG, and PDF files are allowed.");
                    return;
                }

                const fileExtension =
                    file.name.split(".").pop()?.toLowerCase() || "file";

                const uniqueFileName =
                    `${crypto.randomUUID()}.${fileExtension}`;

                const filePath = `requests/${uniqueFileName}`;

                const { error: uploadError } = await supabase.storage
                    .from("project-drawings")
                    .upload(filePath, file, {
                        cacheControl: "3600",
                        upsert: false,
                        contentType: file.type,
                    });

                if (uploadError) {
                    throw new Error(
                        `File upload failed: ${uploadError.message}`
                    );
                }

                const { data } = supabase.storage
                    .from("project-drawings")
                    .getPublicUrl(filePath);

                uploadDrawings = data.publicUrl;
            }

            await emailjs.send(
                "service_0zrjpds",
                "template_9ca0fnh",
                {
                    name,
                    email,
                    phone,
                    targetWoodSpecies,
                    projectCategory,
                    notes,
                    uploadDrawings,
                },
                {
                    publicKey: "kCmRNovEbyNUXu2ql",
                }
            );

            alert("Email sent successfully!");

            form.reset();
            setSelectedFile(null);
        } catch (error) {
            console.error("Error submitting contact form:", error);

            alert(
                "Something went wrong while submitting your request. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

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
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


                        <div>
                            <label className="block text-xs font-semibold mb-1 text-foreground">
                                {t.yourName}
                            </label>

                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                        </div>


                        <div>
                            <label className="block text-xs font-semibold mb-1 text-foreground">
                                {t.emailAddress}
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold mb-1 text-foreground">
                                {t.phone}
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        {/* Project Category */}
                        {!hasProductAndCategory && (
                            <>
                                {/* Project Category */}
                                <div>
                                    <label className="block text-xs font-semibold mb-2 text-foreground">
                                        {t.projectCategory}
                                    </label>

                                    <select
                                        name="projectCategory"
                                        required
                                        className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                    >
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

                                    <select
                                        name="targetWoodSpecies"
                                        required
                                        className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                    >
                                        <option>{t.americanBlackWalnut}</option>
                                        <option>{t.whiteOak}</option>
                                        <option>{t.burmeseTeak}</option>
                                        <option>{t.europeanAsh}</option>
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                    {/* Project Notes */}

                    <div>
                        <label className="block text-xs font-semibold mb-1">
                            {t.projectNotes}
                        </label>

                        <textarea
                            rows={3}
                            placeholder={t.projectNotesPlaceholder}
                            name="notes"
                            required
                            defaultValue={
                                hasProductAndCategory
                                    ? `I am interested in having a custom ${productName?.name} made in the ${category} category. Please provide more details about the available options, pricing, and estimated completion time.`
                                    : undefined
                            }
                            className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground"
                        />
                    </div>
                    {/* File Upload */}
                    {!hasProductAndCategory && (
                        <div>
                            <label className="block text-xs font-semibold mb-2 text-foreground">
                                {t.uploadSketch}
                            </label>

                            <label className="border-2 border-dashed p-8 text-center rounded-sm cursor-pointer border-border hover:border-primary block transition-colors">
                                <Sliders className="w-8 h-8 text-accent mx-auto mb-2" />

                                <span className="text-xs font-semibold block text-foreground truncate max-w-full">
                                    {selectedFile
                                        ? `Selected: ${selectedFile.name}`
                                        : t.uploadDrawings}
                                </span>

                                <span className="text-[10px] text-muted-foreground mt-1 block">
                                    {selectedFile
                                        ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`
                                        : t.maximumFileSize}
                                </span>

                                <input
                                    name="uploadDrawings"
                                    required
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;
                                        setSelectedFile(file);
                                    }}
                                />
                            </label>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="bg-primary hover:bg-accent text-primary-foreground text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors"
                    >
                        {isLoading ? t.loading : t.submitCustomSpecification}
                    </button>
                </form>
            </div>
        </main>
    );
}