
import React, { useState } from 'react';
import { ComparisonGrid } from './components/ComparisonGrid';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<string | undefined>();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg">
              <i className="fa-solid fa-bridge text-white text-xl"></i>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Cross-Platform Bridge
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Explorer</a>
            <a href="#" className="hover:text-blue-400 transition-colors">AI Architect</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Benchmarks</a>
          </nav>
          <div className="flex items-center gap-4">
             <span className="hidden sm:inline text-xs py-1 px-2 rounded-full bg-slate-800 text-blue-400 border border-blue-900">
                v1.0 Powered by Gemini
             </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Build for <span className="text-cyan-400">React</span>, <br className="md:hidden" />
            Think in <span className="text-indigo-500">Flutter</span>.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A specialized tool for web developers to leverage their React knowledge 
            and master Flutter's reactive ecosystem using AI-powered analogies.
          </p>
        </section>

        {/* Comparison Section */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <i className="fa-solid fa-layer-group text-blue-500"></i> Core Concepts
            </h3>
          </div>
          <ComparisonGrid onSelectConcept={(c) => setSelectedConcept(c)} />
        </section>

        {/* AI Assistant Section */}
        <section id="ai-architect" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-6 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white">Ask the Architect</h3>
            <p className="text-slate-400 leading-relaxed">
              Curious about how a specific React pattern translates to Flutter? 
              Our AI assistant is trained to draw precise parallels between frameworks.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-blue-500">
                <p className="text-sm text-slate-300">"How does useEffect map to Flutter's lifecycle?"</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-indigo-500">
                <p className="text-sm text-slate-300">"Show me a Flutter Button widget compared to a React component."</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-cyan-500">
                <p className="text-sm text-slate-300">"What is the equivalent of Redux in the Flutter ecosystem?"</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <AIAssistant initialConcept={selectedConcept} />
          </div>
        </section>

        {/* Informational Section */}
        <section className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-8 rounded-3xl border border-slate-700/50">
           <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left space-y-2">
                <div className="text-blue-500 text-3xl mb-2"><i className="fa-solid fa-bolt"></i></div>
                <h4 className="font-bold text-white">Native Performance</h4>
                <p className="text-slate-400 text-sm">Flutter compiles to machine code, while React uses a bridge or direct DOM manipulation.</p>
              </div>
              <div className="text-center md:text-left space-y-2">
                <div className="text-indigo-500 text-3xl mb-2"><i className="fa-solid fa-palette"></i></div>
                <h4 className="font-bold text-white">Uniform UI</h4>
                <p className="text-slate-400 text-sm">Flutter renders its own widgets, ensuring 100% UI consistency across all devices.</p>
              </div>
              <div className="text-center md:text-left space-y-2">
                <div className="text-cyan-500 text-3xl mb-2"><i className="fa-solid fa-code-branch"></i></div>
                <h4 className="font-bold text-white">Shared Logic</h4>
                <p className="text-slate-400 text-sm">Both encourage unidirectional data flow, making state logic highly portable.</p>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2026 Nevolyft Inc • Built for Senior React Engineers</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
