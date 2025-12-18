export interface Project {
    title: string;
    type: string;
    year: number;
    gitLink?: string | undefined;
    website?: string | undefined;
    imgLink?: string | undefined;
    lang: string[];
    desc: string;
    isLeft?: boolean;
}

export const projects: Project[] = [
    {
        title: "Campusx",
        type: "Academic Team",
        year: 2025,
        lang: ["React", "JavaScript", "Express", "Node", "MongoDB", "Vitest", "HTML", "CSS"],
        desc: "A website where students can browse and sign up to campus events.",
        imgLink: "/campusx-img.png",
        gitLink: "https://github.com/Tinou-code/Groupe_B-SOEN341_Project_F25",
    },
    {
        title: "GetFlicks",
        type: "Personal",
        year: 2025,
        lang: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
        desc: "A wesbsite that allows users to browse movies and get recommendations.",
        imgLink: "/getflicks-img.png",
        website: "https://getflicks-app.vercel.app/",
        gitLink: "https://github.com/osrlazlo/getflicks-app",
    },
    {
        title: "Scientific Calculator",
        type: "Personal",
        year: 2025,
        lang: ["Java", "Springboot", "Vaadin", "Docker"],
        desc: "A scientific calculator.",
        imgLink: "/calculator-img.png",
        website: "https://calculator-web-app2.onrender.com/",
        gitLink: "https://github.com/osrlazlo/calculator-web-app2",
    },
];

