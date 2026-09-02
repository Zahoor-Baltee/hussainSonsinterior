import { locales, type Locale } from "@/config/locales";

import en from "@/data/en/content.json";
import ur from "@/data/ur/content.json";

const allData = {
    en: en,
    ur: ur,
};

export function getContent(locale: Locale) {
    return allData[locale];
}

export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}