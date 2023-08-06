import projects from '../mocks/projects.json';
import { Project } from '../types/project.type';

export const findProjectByName = (projectName: string): Project => {
    return projects.find( project => project.name.replace(" ", "") === projectName) as Project;
}