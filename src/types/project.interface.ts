export interface Project {
    code: string;
    name: string;
    technologies: Technology[];
    img: string;
    description: string;
    fulldesc: string;
    otherImg: string;
    deploy: string;
}

interface Technology {
    name: string;
    img: string;

}