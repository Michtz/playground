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

// test oder beispiel daten
const data: InputData[] = [];

// beschreibung und content der aufgabe
const content: Content = {
  id: 'exerciseId',
  header: 'Übungstitel',
  text: `Beschreibung der Aufgabe:`,
  exampleReturn: `Hier kommt ein Beispiel für die erwartete Ausgabe`,
};

// muss genau so exportiert werden !!! ACHTUNG !!!
export default {
  solutionFn,
  data,
  content,
};
