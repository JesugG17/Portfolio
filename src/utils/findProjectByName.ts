import projects from '../mocks/projects.json';

export const findProjectByName = (projectName: string) => {
    return projects.find( project => project.name.replace(" ", "") === projectName);
}