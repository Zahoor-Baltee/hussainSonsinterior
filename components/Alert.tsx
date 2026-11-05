"use client";

import { useEffect } from "react";
import {
    CheckCircle2,
    XCircle,
    AlertTriangle,
    Info,
    X,
} from "lucide-react";

type AlertType = "success" | "danger" | "warning" | "info";

interface AlertProps {
    open: boolean;
    type?: AlertType;
    title?: string;
    message: string;
    onClose: () => void;
    duration?: number;
}

const alertConfig = {
    success: { icon: CheckCircle2, title: "Success" },
    danger: { icon: XCircle, title: "Error" },
    warning: { icon: AlertTriangle, title: "Warning" },
    info: { icon: Info, title: "Information" },
};
const alertStyles = {
    success: "bg-[#75c595]",
    danger: "bg-[#c79094]",
    warning: "bg-[#FF6600]",
    info: "bg-[#D9EDF7]",
};
const alertStylesText = {
    success: "text-[#0F5132]",
    danger: "text-[#a6192e]",
    warning: "text-[#FF6600]",
    info: "text-[#31708F]",
};
export default function Alert({
    open,
    type = "info",
    title,
    message,
    onClose,
    duration = 4000,
}: AlertProps) {
    const config = alertConfig[type];
    const Icon = config.icon;

    useEffect(() => {
        if (!open || duration <= 0) return;

        const timer = setTimeout(onClose, duration);

        return () => clearTimeout(timer);
    }, [open, duration, onClose]);

    if (!open) return null;
    return (
        <div
            role={type === "danger" ? "alert" : "status"}
            aria-live={type === "danger" ? "assertive" : "polite"}
            className={`
                fixed top-5 right-5 z-50
                w-[calc(100%-2rem)] sm:w-full sm:max-w-md
                flex items-start gap-3 p-4
                rounded-lg  
                  ${alertStyles[type]} shadow-lg
                animate-in fade-in slide-in-from-top-2 duration-200
            `}
        >
            <Icon
                size={20}
                className={`shrink-0 mt-0.5 
                 ${alertStylesText[type]}
                `}
            />

            <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold 
                     ${alertStylesText[type]}
                    `}>
                    {title ?? config.title}
                </p>

                <p className={`text-xs mt-1 leading-relaxed 
                 ${alertStylesText[type]}
                `}>
                    {message}
                </p>
            </div>

            <button
                type="button"
                onClick={onClose}
                aria-label="Close notification"
                className={`
                    shrink-0 p-1 rounded-sm
 ${alertStylesText[type]}
                    hover:bg-foreground hover:text-muted-foreground
                    transition-colors
                `}
            >
                <X size={16} />
            </button>
        </div>
    );
}