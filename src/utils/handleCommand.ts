import { commands } from './commands';

export const handleCommand = (cmd: string): string => {
  const command = cmd.toLowerCase();

  if (command.startsWith('open ')) {
    const url = extractUrl(command);
    if (url) {
      window.open(url, '_blank');
      return `Opening ${url}...`;
    }
    return 'Invalid URL format';
  }

  return commands[command] || `Command not found: ${cmd}`;
};

function extractUrl(command: string): string | null {
  const socialLinks = {
    // project: 'https://linkedin.com/in/dewantarar',
    linkedin: 'https://linkedin.com/in/dewantarar',
    github: 'https://github.com/GoodGuyzaxx',
    instagram: 'https://instagram.com/dewntraa',
  };

  const platform = command.replace('open ', '').trim();
  return socialLinks[platform as keyof typeof socialLinks] || null;
}
