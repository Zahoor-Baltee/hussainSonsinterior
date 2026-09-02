"use client";

import { FormEvent } from "react";
import { Send } from "lucide-react";

type ContactFormProps = {
    t: ReturnType<typeof import("@/lib/i18n").getContent>;
};

export default function ContactForm({ t }: ContactFormProps) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Backend/email integration can be added later.
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
                            required
                            className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-200"
                        />
                    </div>

                </div>

                <div>
                    <label className="block text-xs font-semibold mb-1">
                        {t.subjectProjectType}
                    </label>

                    <input
                        type="text"
                        placeholder={t.subjectPlaceholder}
                        className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-200"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold mb-1">
                        {t.message}
                    </label>

                    <textarea
                        rows={4}
                        required
                        placeholder={t.messagePlaceholder}
                        className="w-full text-xs p-3 rounded-sm border bg-white border-stone-300 text-stone-800 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-200"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-sm flex items-center gap-2"
                >
                    <Send className="w-3.5 h-3.5" />
                    {t.sendMessage}
                </button>

            </form>
        </div>
    );
}