export const WHATSAPP_NUMBER = "923429493874";

export const createWhatsAppUrl = (message?: string) => {
    const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

    if (!message) {
        return baseUrl;
    }

    return `${baseUrl}?text=${encodeURIComponent(message)}`;
};