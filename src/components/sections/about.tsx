import {siteContent} from "@/data/content";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {GraduationCap} from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">{siteContent.about.title}</h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {siteContent.about.content}
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Achievements</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                {siteContent.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <GraduationCap className="h-6 w-6 text-primary"/>
                                </div>
                                <CardTitle>Education</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-1">
                                    <h4 className="font-bold">{siteContent.about.education.degree}</h4>
                                    <p className="text-muted-foreground">{siteContent.about.education.institution}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Core Philosophy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground italic">
                                    "Building scalable, efficient, and future-ready architectures that align with
                                    evolving business and user needs."
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
