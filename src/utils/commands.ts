import { formatProjectList } from "./formatters";
import { projects } from "./projects";

export const commands = {
  help: 'Available commands: help, about, contact, hardware, projects, clear',
  about: 'Hello, I am Dewantara, a final semester student majoring in Computer Science, with experience in Full Stack Mobile Developments and with a high learning intention.',
  hardware: `Macbook Pro 2017 : 
  - Intel Core i5 dual-core 2,3 GHz
  - Ram LPDDR3 16GB
  - Storage 256GB`,
  contact: `Social Links:
  - LinkedIn: https://www.linkedin.com/in/dewantarar/
  - GitHub: https://github.com/GoodGuyzaxx
  - Instagram: https://instagram.com/dewntraa
  - Email : goodguyzaxx@gmail.com`,
  projects: formatProjectList(),
  project: formatProjectList(),
  clear: '',
};