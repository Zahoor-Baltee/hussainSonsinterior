"use client";

import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
    message?: string;
    label?: string;
    className?: string;
};

export default function WhatsAppButton({
    message,
    label = "Chat on WhatsApp",
    className = "",
}: WhatsAppButtonProps) {
    const handleClick = () => {
        const url = createWhatsAppUrl(message);

        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={className}
        >
            <MessageCircle size={18} />
            <span>{label}</span>
        </button>
    );
}