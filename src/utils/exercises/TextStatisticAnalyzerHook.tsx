import { Content } from '@/utils/exercises/types';

interface InputData {
  text: string;
  language: string;
  timestamp: string;
  authorId: number;
}

interface Result {
  wordCount: number;
  averageWordLength: number;
  languageStats: {
    [key: string]: number;
  };
  postsPerDay: {
    [key: string]: number;
  };
  topAuthors: number[];
}

const solutionFn = (data: InputData[]): string => {
  // Ihre Implementierung kommt hier

  return '';
};

const data: InputData[] = [
  {
    text: 'Der schnelle braune Fuchs springt über den faulen Hund.',
    language: 'de',
    timestamp: '2024-01-01T10:00:00Z',
    authorId: 1,
  },
  {
    text: 'The quick brown fox jumps over the lazy dog.',
    language: 'en',
    timestamp: '2024-01-01T11:30:00Z',
    authorId: 2,
  },
  {
    text: 'Le renard brun rapide saute par-dessus le chien paresseux.',
    language: 'fr',
    timestamp: '2024-01-02T09:15:00Z',
    authorId: 1,
  },
  {
    text: 'Der Hund schläft gerne im Garten.',
    language: 'de',
    timestamp: '2024-01-02T14:20:00Z',
    authorId: 3,
  },
  {
    text: 'Programming is fun and challenging!',
    language: 'en',
    timestamp: '2024-01-02T15:45:00Z',
    authorId: 2,
  },
];

const content: Content = {
  id: 'text-statistics-analyzer',
  header: 'Text-Statistik Analyse',
  text: `Beschreibung der Aufgabe:
        Entwickeln Sie eine Funktion zur Analyse von Textbeiträgen, die folgende Anforderungen erfüllt:

        1. Berechnen Sie die Gesamtanzahl der Wörter über alle Texte
        2. Ermitteln Sie die durchschnittliche Wortlänge (Zeichen pro Wort)
        3. Erstellen Sie eine Statistik über die verwendeten Sprachen
           - Als Key-Value Paare mit Sprache als Key und Anzahl als Value
        4. Gruppieren Sie die Beiträge nach Tagen
           - Format YYYY-MM-DD als Key und Anzahl der Beiträge als Value
        5. Finden Sie die Top 3 Autoren nach Anzahl der geschriebenen Wörter
           - Rückgabe als Array von authorIds, sortiert nach Wortanzahl absteigend

        Zusätzliche Informationen:
        - Wörter sind durch Leerzeichen getrennt
        - Die durchschnittliche Wortlänge soll auf 2 Dezimalstellen gerundet sein
        - Satzzeichen sollen bei der Wortlängenberechnung ignoriert werden
        - Das Datum im postsPerDay-Objekt soll im Format YYYY-MM-DD sein`,
  exampleReturn: `{
    "wordCount": 45,
    "averageWordLength": 4.52,
    "languageStats": {
      "de": 2,
      "en": 2,
      "fr": 1
    },
    "postsPerDay": {
      "2024-01-01": 2,
      "2024-01-02": 3
    },
    "topAuthors": [2, 1, 3]
  }`,
};

export default {
  solutionFn,
  data,
  content,
};
