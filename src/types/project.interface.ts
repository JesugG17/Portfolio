export interface Project {
    code: string;
    name: string;
    technologies: Technology[];
    img: string;
    deploy: string;
}

interface Technology {
    name: string;
    img: string;

}