import { CircleAlert } from "lucide-react";

interface ErrorBannerProps {
    show: boolean;
    visible: boolean;
}

export default function ErrorBanner({ show, visible }: ErrorBannerProps) {
    if (!show) return null;

    return (
        <div
            className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 transition-all duration-300 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
        >
            <div className="flex items-center gap-3 p-4 text-white bg-zinc-900 border border-red-600/50 rounded-lg shadow-2xl">
                <span className="font-bold text-red-600 flex items-center">
                    <CircleAlert className="w-5 h-5" />
                </span>
                <p className="text-sm text-zinc-300">Configuration indisponible. Veuillez réessayer plus tard.</p>
            </div>
        </div>
    );
}