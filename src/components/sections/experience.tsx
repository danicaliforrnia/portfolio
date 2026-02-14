import {siteContent} from "@/data/content";
import {Badge} from "@/components/ui/badge";

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

                <div className="max-w-4xl mx-auto space-y-12">
                    {siteContent.experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-primary/20 pb-12 last:pb-0">
                            <div
                                className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"/>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                                <Badge variant="secondary" className="w-fit">
                                    {exp.period}
                                </Badge>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i}
                                        className="text-muted-foreground leading-relaxed flex items-start gap-2">
                                        <span
                                            className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
