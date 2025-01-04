import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { handleCommand } from './utils/handleCommand';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    '---------- WHO AM I ---------------',
    'Hello, I am Dewantara, a final semester student majoring in Computer Science, with experience in Full Stuck Mobile Developments and with a high learning intention.',
    '---------------------------------',
    'Type "help" for available commands',
    'Try "open github" to visit my GitHub profile',
    'Try "open instagram" to visit my Instagram',
    'Try "open linkedin" to visit my LinkedIn',
  ]);

  const processCommand = (cmd: string) => {
    if (cmd.toLowerCase() === 'clear') {
      setHistory(['Type "help" for available commands']);
      return;
    }

    const output = handleCommand(cmd);
    setHistory(prev => [...prev, `root$~ ${cmd}`, output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      processCommand(input.trim());
      setInput('');
    }
  };

  useEffect(() => {
    const terminal = document.getElementById('terminal-output');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [history]);

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-4 font-mono">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-700 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TerminalIcon size={16} />
              <span className="text-gray-300">Terminal</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4">
            <div
              id="terminal-output"
              className="h-[60vh] overflow-y-auto mb-4 space-y-1"
            >
              {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">{line}</div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-green-500">root$~</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-green-400 focus:ring-0"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;