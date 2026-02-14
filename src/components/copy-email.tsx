"use client"

import React from "react";
import {toast} from "sonner";
import {siteContent} from "@/data/content";

interface CopyEmailProps {
    children: React.ReactNode;
    className?: string;
}

export function CopyEmail({children, className}: CopyEmailProps) {
    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(siteContent.contact.email);
            toast.success("Email copied to clipboard!");
        } catch (error) {
            toast.error("Failed to copy email to clipboard");
            console.error("Copy failed", error);
        }
    };

    return (
        <a
            href={`mailto:${siteContent.contact.email}`}
            onClick={handleCopy}
            className={className}
            title="Click to copy email"
        >
            {children}
        </a>
    );
}
