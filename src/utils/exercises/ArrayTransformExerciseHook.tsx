/*
Das hier ist das grundgerüst um eine aufgabe zu befüllen
 */
import { Content } from '@/utils/exercises/types';

interface InputData {
  id: string;
  values: number[];
}

interface Result {}

const solutionFn = (data: InputData[]): string => {
  const transformArray = (input: InputData[]) => {
    return input
      .map((item) => ({
        id: item.id,
        sum: item.values
          .map((num) => Math.abs(num) * 2)
          .reduce((acc, curr) => acc + curr, 0),
      }))
      .sort((a, b) => a.sum - b.sum);
  };

  const result: Result = transformArray(data);

  return JSON.stringify(result, null, 2);
};

const data: InputData[] = [
  { id: 'a1', values: [1, -2, 3] },
  { id: 'a2', values: [-1, 2, -3] },
  { id: 'a3', values: [-5, 0, 5] },
];

const content: Content = {
  id: 'array-transform-exercise',
  header: 'Array Transformation Challenge',
  text: `Implementiere eine Funktion 'transformArray', die ein Array von InputData-Objekten verarbeitet.
  
Für jedes InputData-Objekt soll die Funktion:
1. Alle negativen Zahlen in positive umwandeln
2. Alle Zahlen verdoppeln
3. Die Summe aller transformierten Zahlen berechnen
4. Ein neues Objekt zurückgeben mit: id und der berechneten Summe

Die Funktion soll ein Array dieser neuen Objekte zurückgeben, sortiert nach der Summe in aufsteigender Reihenfolge.`,
  exampleReturn: `Beispiel:
Input: [
  { id: "a1", values: [1, -2, 3] },
  { id: "a2", values: [-1, 2, -3] }
]
Output: [
  { id: "a2", sum: 12 },  // |-1| * 2 + |2| * 2 + |-3| * 2 = 2 + 4 + 6 = 12
  { id: "a1", sum: 12 }   // |1| * 2 + |-2| * 2 + |3| * 2 = 2 + 4 + 6 = 12
]`,
};

// muss genau so exportiert werden !!! ACHTUNG !!!
export default {
  solutionFn,
  data,
  content,
};
