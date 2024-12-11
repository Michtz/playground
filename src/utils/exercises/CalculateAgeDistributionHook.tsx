import { Content } from '@/utils/exercises/types';

interface Person {
  name: string;
  age: number;
}

const solutionFn = (people: Person[]): string => {
  const result: { [key: string]: string[] } = {
    Jugendlich: [],
    'Junge Erwachsene': [],
    Erwachsene: [],
    Senior: [],
  };

  people.forEach((person: Person): void => {
    if (person.age <= 17) {
      result['Jugendlich'].push(person.name);
    } else if (person.age <= 30) {
      result['Junge Erwachsene'].push(person.name);
    } else if (person.age <= 50) {
      result['Erwachsene'].push(person.name);
    } else {
      result['Senior'].push(person.name);
    }
  });
  return JSON.stringify(result);
};

const data: Person[] = [
  { name: 'Sarah', age: 25 },
  { name: 'Michael', age: 42 },
  { name: 'Emma', age: 16 },
  { name: 'David', age: 35 },
  { name: 'Sophie', age: 28 },
  { name: 'Lucas', age: 17 },
];

const content: Content = {
  id: 'calculateAgeDistribution',
  header: 'Altersverteilung berechnen',
  text: `Implementiere eine Funktion calculateAgeDistribution, die ein Array von Personen analysiert und 
           nach bestimmten Alterskategorien gruppiert...`,
  exampleReturn: `Beispiel-Rückgabe: { "Jugendlich": ["Emma", "Lucas"], "Junge Erwachsene": ["Sarah", "Sophie"] ... }`,
};

export default {
  solutionFn,
  data,
  content,
};
