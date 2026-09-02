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
        <footer className="border-t text-xs transition-colors bg-stone-900 border-stone-800 text-stone-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Brand Intro */}
                    <div className="md:col-span-4 space-y-4">
                        {/* <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-sm bg-amber-700 text-stone-50 flex items-center justify-center font-serif font-bold text-lg">
                                C
                            </div>

                            <span className="font-serif text-lg font-bold text-white tracking-tight uppercase">
                                TimberCraft
                            </span>
                        </div> */}
                        <Image
                            src="/hussain-sons-v2.png"
                            alt="Hussain & Sons Logo"
                            width={200}
                            height={50}
                        // className="w-full max-w-[160px] h-auto"
                        />
                        <p className="text-xs leading-relaxed text-stone-400">
                            Premium architectural CNC wood crafting mill. Creating
                            ready-to-ship relief mirror frames, decorative clocks, custom
                            carved doors, windows, and sound-diffusing wall panels.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 space-y-3">
                        <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                            Navigation
                        </h4>

                        <ul className="space-y-2">
                            {NAV_ITEMS.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={getHref(link.path)}
                                        className="hover:text-amber-400 capitalize"
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
                        <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                            Product Lines
                        </h4>

                        <ul className="space-y-2">
                            {CATEGORIES.map((category) => (
                                <li key={category.id}>
                                    <Link
                                        href={getHref(`products/${category.id}`)}
                                        className="hover:text-amber-400"
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
                        <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                            Mill Hours
                        </h4>

                        <p className="text-xs text-stone-400">
                            Monday - Friday: 08:00 - 18:00
                        </p>

                        <p className="text-xs text-stone-400">
                            Saturday (CAD Appts Only): 09:00 - 14:00
                        </p>

                        <div className="pt-2">
                            <Link
                                href={getHref("custom")}
                                className="inline-block bg-amber-700 hover:bg-amber-600 text-white text-[11px] font-semibold uppercase px-4 py-2 rounded-sm"
                            >
                                {content.requestCustom}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-500">
                    <span>
                        © {new Date().getFullYear()} Hussain & Sons CNC Wood Crafting. All
                        rights reserved.
                    </span>

                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <Link href={getHref("privacy")} className="hover:underline">
                            Privacy Policy
                        </Link>

                        <Link href={getHref("terms")} className="hover:underline">
                            Terms of Fabrication
                        </Link>

                        <Link href={getHref("cad-guidelines")} className="hover:underline">
                            CAD Guidelines
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
