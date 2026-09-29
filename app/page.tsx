import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
    defaultLocale,
    locales,
    type Locale,
} from "@/config/locales";

export default async function RootPage() {
    const cookieStore = await cookies();
    const savedLocale = cookieStore.get("locale")?.value;

    const locale: Locale =
        savedLocale && locales.includes(savedLocale as Locale)
            ? (savedLocale as Locale)
            : defaultLocale;

    redirect(`/${locale}`);
}