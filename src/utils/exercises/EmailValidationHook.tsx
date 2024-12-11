import { Content } from '@/utils/exercises/types';

interface EmailData {
  email: string;
  domain: string;
  username: string;
  isValid: boolean;
  validations: EmailValidations;
}

type EmailValidations = {
  hasValidLength: boolean;
  hasValidUsername: boolean;
  hasValidDomain: boolean;
  hasNoConsecutiveDots: boolean;
  startsAndEndsValid: boolean;
};

const solutionFn = (emails: string[]): string => {
  const analyzedEmails: EmailData[] = emails.map((email): EmailData => {
    const isValidFormat: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const [username = '', domain = ''] = email.split('@');
    const validations: EmailValidations = {
      hasValidLength: email.length <= 254,
      hasValidUsername: username.length <= 64,
      hasValidDomain: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain),
      hasNoConsecutiveDots: !email.includes('..'),
      startsAndEndsValid: /^[a-zA-Z0-9].*[a-zA-Z0-9]$/.test(email),
    };

    const isValid: boolean =
      isValidFormat && Object.values(validations).every((v) => v);

    return {
      email,
      domain,
      username,
      isValid,
      validations,
    };
  });

  return JSON.stringify(analyzedEmails, null, 2);
};

const data: String[] = [
  'max.mustermann@firma.de',
  'ungültig@email',
  'test.user@subdomain.domain.com',
  '@invalidemail.de',
  'user.name@domain..invalid',
  'sehr.langer.username.der.zu.lang.ist@domain.de',
  'valid_user123@example.com',
];

const content: Content = {
  id: 'email-validation',
  header: 'Email-Validator und Analyzer',
  text: `Entwickeln Sie eine Funktion, die eine Liste von Email-Adressen analysiert und validiert.

         Anforderungen:
         1. Überprüfung des grundlegenden Email-Formats
         2. Validierung spezieller Regeln:
            - Maximale Gesamtlänge (254 Zeichen)
            - Username-Länge (max. 64 Zeichen)
            - Gültige Domain-Struktur
            - Keine aufeinanderfolgenden Punkte
            - Gültige Start- und End-Zeichen
         3. Aufspaltung in Username und Domain
         4. Rückgabe detaillierter Analyseergebnisse

         Die Funktion soll für jede Email ein Objekt mit allen Validierungsergebnissen zurückgeben.`,
  exampleReturn: `[
  {
    "email": "test@example.com",
    "domain": "example.com",
    "username": "test",
    "isValid": true,
    "validations": {
      "hasValidLength": true,
      "hasValidUsername": true,
      "hasValidDomain": true,
      "hasNoConsecutiveDots": true,
      "startsAndEndsValid": true
    }
  }
]`,
};

export default {
  solutionFn,
  data,
  content,
};
