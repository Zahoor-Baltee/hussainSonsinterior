"use client";

import { useEffect, useState } from "react";
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

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            setDarkMode(false);
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = darkMode ? "light" : "dark";

        setDarkMode(!darkMode);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
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
            {/* --- TOP INFORMATION BAR --- */}
            <div className="border-b border-border bg-surface-secondary text-muted text-xs px-4 py-2 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        +92 315 564 9733
                    </span>

                    <span className="hidden sm:flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        craft@cncwoodwork.com
                    </span>

                    <span className="hidden md:flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        Architectural Wood Mill, District 4
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-primary" />

                        <select
                            value={locale}
                            onChange={handleLanguageChange}
                            className="bg-transparent text-foreground cursor-pointer font-medium focus:outline-none"
                        >
                            {LANGUAGES.map((language) => (
                                <option
                                    key={language.code}
                                    value={language.code}
                                    className="bg-surface text-foreground"
                                >
                                    {language.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Theme Switcher */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            darkMode
                                ? "Switch to light theme"
                                : "Switch to dark theme"
                        }
                        title={
                            darkMode
                                ? "Switch to Light Theme"
                                : "Switch to Dark Theme"
                        }
                        className="p-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
            <header className="sticky top-0 z-40 backdrop-blur-md border-b border-border bg-background/90 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link
                        href={getHref("")}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <Image
                            src="/hussain-sons-v2.png"
                            alt="Hussain & Sons Logo"
                            width={200}
                            height={50}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {NAV_ITEMS.map((link) => (
                            <Link
                                key={link.id}
                                href={getHref(link.path)}
                                className={`transition-colors py-1 border-b-2 ${isActive(link.path)
                                    ? "border-primary text-primary font-semibold"
                                    : "border-transparent text-foreground hover:text-primary"
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
                            className="bg-primary hover:bg-accent text-primary-foreground text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                        >
                            <Wrench className="w-3.5 h-3.5" />
                            {content.requestCustom}
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        aria-label={
                            mobileMenuOpen ? "Close menu" : "Open menu"
                        }
                        className="md:hidden p-2 rounded-md text-foreground hover:bg-surface-secondary focus:outline-none transition-colors"
                        onClick={() =>
                            setMobileMenuOpen((prev) => !prev)
                        }
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
                    <div className="md:hidden border-b border-border bg-surface px-4 pt-2 pb-6 space-y-3">
                        {NAV_ITEMS.map((link) => (
                            <Link
                                key={link.id}
                                href={getHref(link.path)}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block w-full text-left py-2 text-base font-medium border-b border-border transition-colors ${isActive(link.path)
                                    ? "text-primary"
                                    : "text-foreground hover:text-primary"
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
                            className="block w-full mt-4 bg-primary hover:bg-accent text-primary-foreground text-center py-3 text-sm font-semibold uppercase rounded-sm transition-colors"
                        >
                            {content.requestCustom}
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}