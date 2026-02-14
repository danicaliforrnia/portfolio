import {Header} from "@/components/layout/header";
import {Footer} from "@/components/layout/footer";
import {Hero} from "@/components/sections/hero";
import {About} from "@/components/sections/about";
import {Experience} from "@/components/sections/experience";
import {Skills} from "@/components/sections/skills";
import {Contact} from "@/components/sections/contact";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header/>
            <main className="flex-1">
                <Hero/>
                <About/>
                <Experience/>
                <Skills/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}
