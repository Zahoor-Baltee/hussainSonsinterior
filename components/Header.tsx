"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Phone,
    Mail,
    MapPin,
    Globe,
    Sun,
    Moon,
    Wrench,
    X,
    Menu,
} from "lucide-react";

import { getContent } from "@/lib/i18n";
import type { Locale } from "@/config/locales";
import Image from "next/image";

type HeaderProps = {
    locale: Locale;
};

const LANGUAGES = [
    { code: "en", label: "English", dir: "ltr" },
    { code: "ur", label: "اردو", dir: "rtl" },
] as const;

const NAV_ITEMS = [
    { id: "home", path: "" },
    { id: "products", path: "products" },
    { id: "custom", path: "custom" },
    { id: "gallery", path: "gallery" },
    { id: "about", path: "about" },
    { id: "contact", path: "contact" },
] as const;

export default function Header({ locale }: HeaderProps) {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const content = getContent(locale);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    const getHref = (path: string) => {
        return path ? `/${locale}/${path}` : `/${locale}`;
    };

    const isActive = (path: string) => {
        const href = getHref(path);

        return pathname === href;
    };

    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newLocale = event.target.value as Locale;

        const currentPathWithoutLocale =
            pathname.replace(`/${locale}`, "") || "";

        router.push(`/${newLocale}${currentPathWithoutLocale}`);
    };

    return (
        <>
            <div
                className={`border-b text-xs px-4 py-2 flex justify-between items-center ${darkMode
                    ? "border-stone-800 bg-stone-900/60 text-stone-400"
                    : "border-stone-200 bg-stone-100/80 text-stone-600"
                    }`}
            >
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-amber-600" />
                        +1 (800) 555-WOOD
                    </span>

                    <span className="hidden sm:flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-amber-600" />
                        craft@cncwoodwork.com
                    </span>

                    <span className="hidden md:flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        Architectural Wood Mill, District 4
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-amber-600" />

                        <select
                            value={locale}
                            onChange={handleLanguageChange}
                            className={`bg-transparent cursor-pointer font-medium focus:outline-none ${darkMode ? "text-stone-300" : "text-stone-700"
                                }`}
                        >
                            {LANGUAGES.map((language) => (
                                <option
                                    key={language.code}
                                    value={language.code}
                                    className={
                                        darkMode
                                            ? "bg-stone-900 text-stone-100"
                                            : "bg-white text-stone-900"
                                    }
                                >
                                    {language.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Theme Switcher */}
                    <button
                        onClick={toggleTheme}
                        className={`p-1 rounded-full transition-colors ${darkMode
                            ? "bg-stone-800 text-amber-400 hover:bg-stone-700"
                            : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                            }`}
                        title="Toggle Light/Dark Theme"
                    >
                        {darkMode ? (
                            <Sun className="w-3.5 h-3.5" />
                        ) : (
                            <Moon className="w-3.5 h-3.5" />
                        )}
                    </button>
                </div>
            </div>

            {/* --- MAIN NAVIGATION BAR --- */}
            <header
                className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${darkMode
                    ? "bg-stone-950/90 border-stone-800"
                    : "bg-[#FAF8F5]/90 border-stone-200"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link
                        href={getHref("")}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        {/* <div className="w-10 h-10 rounded-sm bg-amber-700 text-stone-50 flex items-center justify-center font-serif font-bold text-xl shadow-md group-hover:bg-amber-600 transition-colors">
                            <Image src="/hs-lockup-transparent.png" alt="Hussain & Sons Logo" width={40} height={40} />
                        </div>

                        <div>
                            <span className="font-serif text-xl font-bold tracking-tight block uppercase">
                                Hussain & Sons
                            </span>

                            <span className="text-[10px] tracking-widest text-amber-700 dark:text-amber-500 font-semibold uppercase block -mt-1">
                                Architectural CNC
                            </span>
                        </div> */}
                        <Image
                            src="/hussain-sons-v2.png"
                            alt="Hussain & Sons Logo"
                            width={200}
                            height={50}
                        // className="w-full max-w-[160px] h-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {NAV_ITEMS.map((link) => (
                            <Link
                                key={link.id}
                                href={getHref(link.path)}
                                className={`transition-colors py-1 border-b-2 ${isActive(link.path)
                                    ? "border-amber-600 text-amber-600 font-semibold"
                                    : "border-transparent hover:text-amber-600 dark:text-stone-300"
                                    }`}
                            >
                                {link.id === "home" && content.navHome}
                                {link.id === "products" && content.navProducts}
                                {link.id === "custom" && content.navServices}
                                {link.id === "gallery" && content.navGallery}
                                {link.id === "about" && content.navAbout}
                                {link.id === "contact" && content.navContact}
                            </Link>
                        ))}
                    </nav>

                    {/* Header Action Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href={getHref("custom")}
                            className="bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                        >
                            <Wrench className="w-3.5 h-3.5" />
                            {content.requestCustom}
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 rounded-md focus:outline-none"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Navigation */}
                {mobileMenuOpen && (
                    <div
                        className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 ${darkMode
                            ? "bg-stone-900 border-stone-800"
                            : "bg-stone-50 border-stone-200"
                            }`}
                    >
                        {NAV_ITEMS.map((link) => (
                            <Link
                                key={link.id}
                                href={getHref(link.path)}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block w-full text-left py-2 text-base font-medium border-b ${darkMode
                                    ? "border-stone-800 text-stone-200"
                                    : "border-stone-200 text-stone-800"
                                    }`}
                            >
                                {link.id === "home" && content.navHome}
                                {link.id === "products" && content.navProducts}
                                {link.id === "custom" && content.navServices}
                                {link.id === "gallery" && content.navGallery}
                                {link.id === "about" && content.navAbout}
                                {link.id === "contact" && content.navContact}
                            </Link>
                        ))}

                        <Link
                            href={getHref("custom")}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full mt-4 bg-amber-700 text-white text-center py-3 text-sm font-semibold uppercase rounded-sm"
                        >
                            {content.requestCustom}
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}