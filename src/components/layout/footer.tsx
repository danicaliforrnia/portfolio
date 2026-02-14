import {siteContent} from "@/data/content";
import {Github, Linkedin, Mail} from "lucide-react";
import Link from "next/link";
import {CopyEmail} from "@/components/copy-email";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <span className="text-xl font-bold text-primary">{siteContent.header.name}</span>
                        <p className="text-sm text-muted-foreground">{siteContent.footer.text}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href={siteContent.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            <Github className="h-5 w-5"/>
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href={siteContent.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            <Linkedin className="h-5 w-5"/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <CopyEmail
                            className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            <Mail className="h-5 w-5"/>
                            <span className="sr-only">Email</span>
                        </CopyEmail>
                    </div>
                </div>
            </div>
        </footer>
    );
}
