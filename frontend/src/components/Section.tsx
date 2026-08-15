import { CSSProperties, ReactNode } from "react";

type SectionVariant = "white" | "light" | "dark" | "navy";

interface SectionProps {
    children: ReactNode;
    className?: string;
    variant?: SectionVariant;
    /** Override the default py-16 md:py-24 */
    size?: "sm" | "md" | "lg";
    id?: string;
    style?: CSSProperties;
}

const variantClasses: Record<SectionVariant, string> = {
    white: "bg-white",
    light: "bg-[#f8fbff]",
    dark: "bg-slate-50",
    navy: "bg-[#0d2542]",
};

const sizeClasses = {
    sm: "py-10 md:py-14",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
};

export default function Section({
    children,
    className = "",
    variant = "white",
    size = "md",
    id,
    style,
}: SectionProps) {
    return (
        <section
            id={id}
            className={`w-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            style={style}
        >
            {children}
        </section>
    );
}
