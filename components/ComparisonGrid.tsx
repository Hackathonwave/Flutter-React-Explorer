
import React from 'react';
import { COMPARISONS } from '../constants';

interface ComparisonGridProps {
  onSelectConcept: (concept: string) => void;
}

export const ComparisonGrid: React.FC<ComparisonGridProps> = ({ onSelectConcept }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {COMPARISONS.map((item) => (
        <button
          key={item.concept}
          onClick={() => onSelectConcept(item.concept)}
          className="p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-blue-500 transition-all text-left group"
        >
          <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300">
            {item.concept}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-slate-700 pb-1">
              <span className="text-slate-400">React:</span>
              <span className="font-medium text-cyan-400">{item.react}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Flutter:</span>
              <span className="font-medium text-indigo-400">{item.flutter}</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500 italic">
            {item.description}
          </p>
        </button>
      ))}
    </div>
  );
};
