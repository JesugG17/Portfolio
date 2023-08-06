export type Project = {
    name: string;
    description: string;
    technologies: Techonology[];
    fulldesc: string;
    img: string;
    otherImg: string;
    code: string;
    deploy: string;
}

type Techonology = {
    name: string,
    img: string;
}

