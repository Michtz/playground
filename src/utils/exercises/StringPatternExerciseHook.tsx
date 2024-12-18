/*
Das hier ist das grundgerüst um eine aufgabe zu befüllen
 */
import { Content } from '@/utils/exercises/types';

interface InputData {}

interface Result {}

const solutionFn = (data: InputData[]): string => {
  // hier kommt die eigentliche Lösungsimplementierung als arrow function

  const result: Result = {
    // hier das ergebins
  };

  return JSON.stringify(result, null, 2);
};

const data: InputData[] = [
  {
    id: 'text1',
    text: 'Hello World! Hello JavaScript!',
    pattern: 'Hello',
  },
  {
    id: 'text2',
    text: 'TypeScript is awesome. JavaScript is awesome too.',
    pattern: 'awesome',
  },
  {
    id: 'text3',
    text: 'Code code code!',
    pattern: 'code',
  },
];

const content: Content = {
  id: 'string-pattern-exercise',
  header: 'String Pattern Analysis',
  text: `Implementiere eine Funktion 'analyzePattern', die ein Array von InputData-Objekten verarbeitet.
  
Die Funktion soll für jedes InputData-Objekt:
1. Zählen, wie oft das 'pattern' im 'text' vorkommt (Groß-/Kleinschreibung beachten)
2. Die Position des ersten Vorkommens ermitteln (-1 wenn nicht gefunden)
3. Die Position des letzten Vorkommens ermitteln (-1 wenn nicht gefunden)
4. Ein neues Objekt zurückgeben mit:
   - id
   - count (Anzahl der Vorkommen)
   - firstIndex (erste Position)
   - lastIndex (letzte Position)

Die Ergebnisse sollen nach count (absteigend) sortiert werden.`,
  exampleReturn: `Beispiel:
Input: [
  { id: "t1", text: "Hello Hello World", pattern: "Hello" },
  { id: "t2", text: "No matches here", pattern: "test" }
]
Output: [
  { id: "t1", count: 2, firstIndex: 0, lastIndex: 6 },
  { id: "t2", count: 0, firstIndex: -1, lastIndex: -1 }
]`,
};

// muss genau so exportiert werden !!! ACHTUNG !!!
export default {
  solutionFn,
  data,
  content,
};
