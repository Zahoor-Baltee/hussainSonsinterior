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
        <div className="lg:col-span-7 p-8 rounded-sm border bg-surface border-border shadow-lg">
            <h3 className="font-serif text-xl font-bold mb-6 text-foreground">
                {t.sendMessage}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

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

                </div>

                <div>
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

                    <label className="block text-xs font-semibold mb-1 text-foreground">
                        {t.subjectProjectType}
                    </label>

                    <input
                        type="text"
                        name="subject"
                        placeholder={t.subjectPlaceholder}
                        className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">
                        {t.message}
                    </label>

                    <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder={t.messagePlaceholder}
                        className="w-full text-xs p-3 rounded-sm border bg-surface border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary hover:bg-accent text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-3 rounded-sm flex items-center gap-2 transition-colors"
                >
                    {isLoading ? (
                        <>
                            <span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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