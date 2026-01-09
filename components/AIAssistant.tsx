
import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from '../services/geminiService';
import { Message } from '../types';

export const AIAssistant: React.FC<{ initialConcept?: string }> = ({ initialConcept }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your Framework Bridge assistant. I can explain any Flutter concept by relating it to React. What's on your mind?",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialConcept) {
      handleSend(`Explain the Flutter equivalent of React's ${initialConcept}`);
    }
  }, [initialConcept]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    const userText = text || input;
    if (!userText.trim()) return;

    const newUserMsg: Message = { role: 'user', content: userText, timestamp: Date.now() };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsLoading(true);

    const response = await askGemini(userText);
    const assistantMsg: Message = { role: 'assistant', content: response || '', timestamp: Date.now() };
    
    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[600px] bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
      <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center gap-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <h2 className="font-semibold text-slate-200">AI Framework Architect</h2>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
            }`}>
              <div className="prose prose-invert prose-sm">
                {m.content.split('\n').map((line, idx) => (
                  <p key={idx} className="mb-2 last:mb-0 whitespace-pre-wrap">{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 flex gap-2">
              <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a concept (e.g. Navigation, Lists, Inputs)..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-200"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-6 py-2 rounded-lg transition-colors font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
