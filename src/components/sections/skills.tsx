import {siteContent} from "@/data/content";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Code2, Cpu, Database, Globe} from "lucide-react";

export function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 className="h-6 w-6 text-primary"/>,
            skills: siteContent.skills.languages,
        },
        {
            title: "Frameworks & Libraries",
            icon: <Globe className="h-6 w-6 text-primary"/>,
            skills: siteContent.skills.frameworks,
        },
        {
            title: "Cloud & DevOps",
            icon: <Cpu className="h-6 w-6 text-primary"/>,
            skills: siteContent.skills.cloudDevOps,
        },
        {
            title: "Databases",
            icon: <Database className="h-6 w-6 text-primary"/>,
            skills: siteContent.skills.databases,
        },
    ];

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <Card key={index} className="border-none shadow-md">
                            <CardHeader className="flex flex-row items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    {category.icon}
                                </div>
                                <CardTitle className="text-lg">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
