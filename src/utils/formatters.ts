import { projects } from './projects';

export const formatProjectList = (): string => {
    return projects.map((project, index) => `
${index + 1}. ${project.name}
   Description: ${project.description}
   Technologies: ${project.tech.join(', ')}
   ${project.link ? `Link: ${project.link}` : ''}
   
   
   ${'-'.repeat(50)}
`).join('\n');
};


// [Image]: ${project.image}