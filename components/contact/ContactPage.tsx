import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

type ContactPageProps = {
    locale: string;
    t: ReturnType<typeof import("@/lib/i18n").getContent>;
};

export default function ContactPage({ t }: ContactPageProps) {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Info Side */}
                <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-500">
                        {t.getInTouch}
                    </span>

                    <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                        {t.startYourWoodProject}
                    </h1>

                    <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                        {t.contactDescription}
                    </p>

                    <div className="space-y-4 pt-4">

                        <div className="flex items-start gap-3 text-xs">
                            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />

                            <div>
                                <span className="font-bold block">
                                    {t.studioAndMill}
                                </span>

                                <span className="text-stone-500">
                                    {t.studioAddress}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 text-xs">
                            <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />

                            <div>
                                <span className="font-bold block">
                                    {t.directPhone}
                                </span>

                                <span className="text-stone-500">
                                    {t.phoneNumber}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 text-xs">
                            <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />

                            <div>
                                <span className="font-bold block">
                                    {t.engineeringInquiries}
                                </span>

                                <span className="text-stone-500">
                                    {t.contactEmail}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <ContactForm t={t} />

            </div>
        </main>
    );
}