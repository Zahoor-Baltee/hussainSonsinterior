"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";


type ContactFormProps = {
    t: ReturnType<typeof import("@/lib/i18n").getContent>;
};

export default function ContactForm({ t }: ContactFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        try {
            setIsLoading(true);
            const formData = new FormData(form);

            const data = {
                phone: formData.get("phone") as string,
                name: formData.get("name") as string,
                email: formData.get("email") as string,
                subject: formData.get("subject") as string,
                message: formData.get("message") as string,
            };


            await emailjs.send(
                "service_0zrjpds",
                "template_2mg39at",
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    phone: data.phone,
                },
                {
                    publicKey: "kCmRNovEbyNUXu2ql",
                }
            );

            alert("Email sent successfully!");

            // Reset form after successful email
            form.reset();

        } catch (error) {
            console.error("Error submitting contact form:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="lg:col-span-7 p-8 rounded-sm border bg-white border-stone-200 shadow-lg dark:bg-stone-900 dark:border-stone-800">
            <h3 className="font-serif text-xl font-bold mb-6">
                {t.sendMessage}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                        <label className="block text-xs font-semibold mb-1">
                            {t.yourName}
                        </label>

                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-200"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold mb-1">
                            {t.emailAddress}
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-200"
                        />
                    </div>

                </div>

                <div>
                    <div>
                        <label className="block text-xs font-semibold mb-1">
                            {t.phone}
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            required
                            className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-200"
                        />
                    </div>
                    <label className="block text-xs font-semibold mb-1">
                        {t.subjectProjectType}
                    </label>

                    <input
                        type="text"
                        name="subject"
                        placeholder={t.subjectPlaceholder}
                        className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-200"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold mb-1">
                        {t.message}
                    </label>

                    <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder={t.messagePlaceholder}
                        className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-200"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider px-3 py-3 rounded-sm flex items-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            {t.loading}
                        </>
                    ) : (
                        <>
                            <Send className="w-3.5 h-3.5" />
                            {t.sendMessage}
                        </>
                    )}
                </button>

            </form>
        </div>
    );
}