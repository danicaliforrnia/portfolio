"use client";

import {siteContent} from "@/data/content";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {BookText, Github, Linkedin, Mail} from "lucide-react";
import {CopyEmail} from "@/components/copy-email";
import {SyntheticEvent, useState} from "react";
import {Spinner} from "@/components/ui/spinner"
import {toast} from "sonner";
import emailjs from '@emailjs/browser';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const body = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                body,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (res.status === 200) {
                toast.success("Notification sent to Daniel! ☺️");
                form.reset();
            } else {
                toast.error("Failed to notify Daniel! 😔");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Let's connect</h3>
                            <p className="text-muted-foreground">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part
                                of your visions.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <CopyEmail className="text-muted-foreground hover:text-primary transition-colors">
                                        {siteContent.contact.email}
                                    </CopyEmail>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <p className="font-medium">LinkedIn</p>
                                    <a href={siteContent.contact.linkedin} target="_blank" rel="noopener noreferrer"
                                       className="text-muted-foreground hover:text-primary transition-colors">
                                        indanielstefanelli
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Github className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <p className="font-medium">GitHub</p>
                                    <a href={siteContent.contact.github} target="_blank" rel="noopener noreferrer"
                                       className="text-muted-foreground hover:text-primary transition-colors">
                                        danicaliforrnia
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <BookText className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <p className="font-medium">Medium</p>
                                    <a href={siteContent.contact.medium} target="_blank" rel="noopener noreferrer"
                                       className="text-muted-foreground hover:text-primary transition-colors">
                                        Daniel Stefanelli
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-card rounded-xl border shadow-sm">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Your Message"
                                className="min-h-37.5"
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit" disabled={isSubmitting}>
                            Send message
                            {isSubmitting && <Spinner className="ml-2"/>}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
