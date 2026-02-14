export const siteContent = {
    header: {
        name: "Daniel Stefanelli",
        title: "Senior Software Engineer",
        nav: [
            {label: "Home", href: "#home"},
            {label: "About", href: "#about"},
            {label: "Experience", href: "#experience"},
            {label: "Skills", href: "#skills"},
            {label: "Contact", href: "#contact"},
        ],
    },
    hero: {
        greeting: "Hi, I'm",
        name: "Daniel Stefanelli",
        title: "Senior Software Engineer",
        description: "Solution-driven Senior Software Engineer with years of hands-on experience developing innovative, high-impact software solutions. Proven track record of delivering successful projects in cloud computing, ensuring scalable, efficient, and future-ready architectures that align with evolving business and user needs.",
        cta: "View Experience",
        ctaHref: "#experience",
        cvHref: "/pdf/CV - Daniel Stefanelli.pdf",
    },
    about: {
        title: "About Me",
        content: "I am a Telecommunications Engineer turned Software Engineer, passionate about building high-performance systems and user-friendly applications. With a strong background in both frontend and backend technologies, I specialize in creating scalable microservices and intuitive user interfaces.",
        education: {
            degree: "BSc Telecommunications Engineering",
            institution: "University of Carabobo",
        },
    },
    experience: [
        {
            company: "MediaMarkt Tech Hub Spain",
            role: "Senior Software Engineer",
            period: "October 2022 - Present",
            description: [
                "Led the development of a high-performance REST API for product categorization in the web market, ensuring low response times, high availability, and the ability to handle millions of requests efficiently.",
                "Designed and developed microservices and APIs for cross-selling within the web application, ensuring high availability during peak seasons, which resulted in increased sales and optimized stock reduction.",
                "Contributed to the design and development of microfrontend applications for a suite of assortment management and optimization services, enhancing stock reduction and improving assortment distribution.",
            ],
        },
        {
            company: "Altran Innovación Spain",
            role: "Senior Software Engineer",
            period: "March 2020 - October 2022",
            description: [
                "Developed and maintained a robust, multi-tenant, and customizable serverless application for an insurance company, enhancing the customer journey and overall satisfaction.",
            ],
        },
        {
            company: "SweatWorks USA",
            role: "Backend Software Engineer",
            period: "May 2018 - March 2020",
            description: [
                "Designed and developed a secure, user-friendly web application to streamline medical data management for doctors and athletes, ensuring data protection and compliance with security standards.",
                "Led a cross-functional team with Agile methodologies, resulting in on-time deliveries and 90% of test coverage.",
            ],
        },
        {
            company: "Intelix Synergy Venezuela",
            role: "Application Developer",
            period: "June 2015 - May 2018",
            description: [
                "Led the development of a brand new, user-friendly, and customer-oriented banking application, helping in achieving customer satisfaction and engagement.",
                "Designed and developed a scalable microservices architecture, ensuring high availability for a customer-facing application serving thousands of users for a banking client.",
                "Developed a customer queue management system that significantly reduced on-site wait times, enhancing service efficiency and customer satisfaction.",
            ],
        },
    ],
    skills: {
        languages: ["JavaScript/Typescript", "Java", "SQL"],
        frameworks: ["Node.js", "NestJS", "React / Next.js", "React Native", "Angular", "Spring Boot"],
        cloudDevOps: ["GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "GitHub Actions", "GitLab CI"],
        databases: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    achievements: [
        "Creditor of Honorable Mention and Publication Mention for my thesis.",
        "Author of an electronic security application for the authentication of Android phones based on the biometric analysis of human locomotion.",
    ],
    contact: {
        email: "danielstefanellih@gmail.com",
        linkedin: "https://www.linkedin.com/in/danielstefanelli",
        github: "https://github.com/danicaliforrnia",
    },
    footer: {
        text: "© 2026 Daniel Stefanelli. All rights reserved.",
    },
};
