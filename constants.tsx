
import React from 'react';
import { ComparisonItem } from './types';

export const COMPARISONS: ComparisonItem[] = [
  {
    concept: 'Base Unit',
    react: 'Component',
    flutter: 'Widget',
    description: 'The fundamental building block of the user interface.'
  },
  {
    concept: 'State Management',
    react: 'useState / Redux / Context',
    flutter: 'setState / Provider / Riverpod',
    description: 'How data changes are propagated to the UI.'
  },
  {
    concept: 'Layout System',
    react: 'Flexbox / CSS Grid',
    flutter: 'Row / Column / Stack',
    description: 'The mechanism for positioning elements on the screen.'
  },
  {
    concept: 'Lifecycle',
    react: 'useEffect (hook)',
    flutter: 'initState / dispose',
    description: 'Events that occur during the lifespan of a UI element.'
  }
];

export const SYSTEM_PROMPT = `You are an expert full-stack developer with deep knowledge of both React and Flutter. 
Your goal is to help users understand Flutter by using React analogies. 
When asked about Flutter concepts, explain them in terms of their React equivalents. 
Provide clear, concise code snippets for both where applicable.
Always be encouraging and technical yet accessible.`;
