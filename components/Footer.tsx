import Link from "next/link";
import type { Locale } from "@/config/locales";
import { getContent } from "@/lib/i18n";

import {
    Grid,
    Clock,
    Box,
    Layers,
    Compass,
    Sliders,
} from "lucide-react";
import Image from "next/image";

type FooterProps = {
    locale: Locale;
};

const CATEGORIES = [
    {
        id: "mirror-frames",
        name: "Mirror Frames",
        nameUr: "آئینے کے فریم",
        icon: Grid,
        count: 18,
        desc: "Intricately relief-carved accent and full-length wooden frames.",
    },
    {
        id: "wall-clocks",
        name: "Wall Clocks",
        nameUr: "دیوار کی گھڑیاں",
        icon: Clock,
        count: 12,
        desc: "Architectural clockworks combining natural timber grain & brass.",
    },
    {
        id: "wooden-doors",
        name: "Wooden Doors",
        nameUr: "لکڑی کے دروازے",
        icon: Box,
        count: 24,
        desc: "Heavy solid entry & interior doors with deep CNC geometric carving.",
    },
    {
        id: "wooden-windows",
        name: "Wooden Windows",
        nameUr: "لکڑی کی کھڑکیاں",
        icon: Layers,
        count: 15,
        desc: "Custom louvers, screens, and classic carved frame surrounds.",
    },
    {
        id: "ceiling-designs",
        name: "Ceiling Panels",
        nameUr: "چھت کے پینل",
        icon: Compass,
        count: 20,
        desc: "Coffered panels, geometric grilles, and backlighted ceiling layouts.",
    },
    {
        id: "decorative-panels",
        name: "Decorative Wall Panels",
        nameUr: "آرائشی دیواری پینل",
        icon: Sliders,
        count: 32,
        desc: "Acoustic & 3D carved partition walls, mashrabiya and fretwork.",
    },
];

const NAV_ITEMS = [
    { id: "home", path: "" },
    { id: "products", path: "products" },
    { id: "custom", path: "custom" },
    { id: "gallery", path: "gallery" },
    { id: "about", path: "about" },
    { id: "contact", path: "contact" },
] as const;

export default function Footer({ locale }: FooterProps) {
    const content = getContent(locale);

    const getHref = (path: string) => {
        return path ? `/${locale}/${path}` : `/${locale}`;
    };

    return (
        <footer className="border-t text-xs transition-colors bg-footer border-footer-border text-footer-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Brand Intro */}
                    <div className="md:col-span-4 space-y-4">
                        <Image
                            src="/hussain-sons-v2.png"
                            alt="Hussain & Sons Logo"
                            width={200}
                            height={50}
                        />

                        <p className="text-xs leading-relaxed text-footer-muted">
                            {content.footerTagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 space-y-3">
                        <h4 className="font-serif text-sm font-bold text-footer-foreground uppercase tracking-wider">
                            {content.footerNav}
                        </h4>

                        <ul className="space-y-2">
                            {NAV_ITEMS.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={getHref(link.path)}
                                        className="hover:text-accent capitalize transition-colors"
                                    >
                                        {link.id === "home" && content.navHome}
                                        {link.id === "products" && content.navProducts}
                                        {link.id === "custom" && content.navServices}
                                        {link.id === "gallery" && content.navGallery}
                                        {link.id === "about" && content.navAbout}
                                        {link.id === "contact" && content.navContact}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="font-serif text-sm font-bold text-footer-foreground uppercase tracking-wider">
                            {content.footerPro}
                        </h4>

                        <ul className="space-y-2">
                            {CATEGORIES.map((category) => (
                                <li key={category.id}>
                                    <Link
                                        href={`/${locale}/products/${category.id}`}
                                        className="hover:text-accent transition-colors"
                                    >
                                        {locale === "ur"
                                            ? category.nameUr
                                            : category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Contact */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="font-serif text-sm font-bold text-footer-foreground uppercase tracking-wider">
                            {content.millHours}
                        </h4>

                        <p className="text-xs text-footer-muted">
                            {content.weekTime}
                        </p>

                        <p className="text-xs text-footer-muted">
                            {content.weekendTime}
                        </p>

                        <div className="pt-2">
                            <Link
                                href={getHref("custom")}
                                className="inline-block bg-primary hover:bg-accent text-primary-foreground text-[11px] font-semibold uppercase px-4 py-2 rounded-sm transition-colors"
                            >
                                {content.requestCustom}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-footer-border flex flex-col sm:flex-row justify-between items-center text-[11px] text-footer-muted">
                    <span>
                        © {new Date().getFullYear()} Hussain & Sons CNC Wood Crafting. All
                        rights reserved.
                    </span>

                    {/* <div className="flex gap-4 mt-2 sm:mt-0">
                        <Link
                            href={getHref("privacy")}
                            className="hover:text-accent hover:underline transition-colors"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href={getHref("terms")}
                            className="hover:text-accent hover:underline transition-colors"
                        >
                            Terms of Fabrication
                        </Link>

                        <Link
                            href={getHref("cad-guidelines")}
                            className="hover:text-accent hover:underline transition-colors"
                        >
                            CAD Guidelines
                        </Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
