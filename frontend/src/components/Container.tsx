import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * The single layout-centering wrapper used across EVERY section.
 * max-width: 1200px, auto horizontal margins, responsive padding.
 */
export default function Container({ children, className = "" }: ContainerProps) {
    return (
        <div
            style={{
                maxWidth: "1200px",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "clamp(1rem, 4vw, 2rem)",
                paddingRight: "clamp(1rem, 4vw, 2rem)",
            }}
            className={className}
        >
            {children}
        </div>
    );
}
