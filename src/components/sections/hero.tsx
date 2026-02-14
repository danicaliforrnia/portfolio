import {siteContent} from "@/data/content";
import {Button} from "@/components/ui/button";
import {ArrowRight, FileText} from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary">{siteContent.hero.greeting}</h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                            {siteContent.hero.name}
                        </h1>
                        <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
                            {siteContent.hero.title}
                        </p>
                    </div>

                    <p className="max-w-175 text-lg text-muted-foreground leading-relaxed">
                        {siteContent.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" asChild>
                            <Link href={siteContent.hero.ctaHref}>
                                {siteContent.hero.cta} <ArrowRight className="ml-2 h-5 w-5"/>
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href={siteContent.hero.cvHref} target="_blank" rel="noopener noreferrer">
                                <FileText className="mr-2 h-5 w-5"/> Download CV
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
