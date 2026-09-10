import Link from "next/link";
import React from "react";

interface ConfigureButtonProps {
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function ConfigureButton({ onClick }: ConfigureButtonProps) {
    return (
        <div className="md:hidden fixed right-0 top-1/2 -translate-y-1/2 z-40">
            <Link
                href="#"
                onClick={onClick}
                className="block bg-red-600 text-white font-bold uppercase tracking-[3px] text-xs py-4 px-2.5 shadow-2xl hover:bg-red-700 transition-colors [writing-mode:vertical-rl] rounded-l-md border-l border-t border-b border-red-500/50"
            >
                Configurer
            </Link>
        </div>
    );
}