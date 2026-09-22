
"use client";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

import { getContent } from "@/lib/i18n";
import type { Locale } from "@/config/locales";

type BreadcrumbProps = {
    locale: Locale;
};

export default function Breadcrumb({ locale }: BreadcrumbProps) {
    const pathname = usePathname();
    const content = getContent(locale);

    const pathWithoutLocale = pathname.replace(`/${locale}`, "");

    // Don't show breadcrumb on homepage
    if (!pathWithoutLocale || pathWithoutLocale === "/") {
        return null;
    }

    const segments = pathWithoutLocale.split("/").filter(Boolean);

    const currentPage = segments[segments.length - 1];

    const getCurrentLabel = () => {
        switch (currentPage) {
            case "products":
                return content.navProducts;

            case "custom":
                return content.navServices;

            case "gallery":
                return content.navGallery;

            case "about":
                return content.navAbout;

            case "contact":
                return content.navContact;

            default:
                return currentPage.replaceAll("-", " ");
        }
    };

    return (
        <div className="border-b text-xs py-3 px-4 sm:px-8 bg-surface-secondary/50 border-border text-muted">
            <div className="max-w-7xl mx-auto flex items-center gap-2">
                <a
                    href={`/${locale}`}
                    className="hover:text-primary transition-colors"
                >
                    {content.navHome}
                </a>

                <ChevronRight className="w-3 h-3 text-muted-foreground" />

                <span className="capitalize font-semibold text-primary">
                    {getCurrentLabel()}
                </span>
            </div>
        </div>
    );
}
