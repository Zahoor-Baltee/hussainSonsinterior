import { getContent } from "@/lib/i18n";
import { Locale } from "@/config/locales";
import GalleryPage from "@/components/gallery/GalleryPage";

type GalleryRouteProps = {
    params: Promise<{
        locale: Locale;
    }>;
};

export default async function GalleryRoute({
    params,
}: GalleryRouteProps) {
    const { locale } = await params;

    const t = getContent(locale);

    return (
        <GalleryPage
            locale={locale}
            t={t}
        />
    );
}