export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl?: string;
}

export interface Skill {
    name: string;
    level: number;
}

export interface Portfolio {
    projects: Project[];
    skills: Skill[];
}