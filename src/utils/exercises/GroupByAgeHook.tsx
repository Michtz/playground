import { Content } from '@/utils/exercises/types';

interface Person {
  name: string;
  age: number;
}

const solutionFn = (people: Person[]): string => {
  const result: { [key: string]: string[] } = {};

  people.forEach((person: Person): void => {
    const groupStart = Math.floor(person.age / 10) * 10;
    const groupEnd = groupStart + 9;
    const groupKey = groupStart.toString() + '-' + groupEnd.toString();

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(person.name);
  });

  return JSON.stringify(result);
};

const data: Person[] = [
  { name: 'Max', age: 18 },
  { name: 'Anna', age: 24 },
  { name: 'Tom', age: 15 },
  { name: 'Lisa', age: 21 },
  { name: 'Ben', age: 8 },
];

const content: Content = {
  id: 'groupByAge',
  header: 'Gruppierung nach Altersgruppen',
  text: `Schreibe eine Funktion groupByAge, die ein Array von Personen nach
      Altersgruppen gruppiert. Das Alter soll in 10er-Gruppen zusammengefasst
      werden (0-9, 10-19, 20-29 etc.). Die Funktion soll ein Array von Objekten
      mit name und age als Input nehmen und ein Objekt zurückgeben, bei dem die
      Schlüssel die Altersgruppen sind und die Werte Arrays mit den Namen der
      Personen in dieser Altersgruppe.`,
  exampleReturn: `Beispiel-Rückgabe: { 0-9: ["Emma", "Lucas"], 10-19: ["Sarah", "Sophie"] ... }`,
};

export default {
  solutionFn,
  data,
  content,
};
