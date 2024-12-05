import { FC } from 'react';
import { Code, Text, VStack, Box } from '@chakra-ui/react';

const FunctionPlayground: FC = () => {
  const content = {
    text: `Schreibe eine Funktion groupByAge, die ein Array von Personen nach
          Altersgruppen gruppiert. Das Alter soll in 10er-Gruppen zusammengefasst
          werden (0-9, 10-19, 20-29 etc.). Die Funktion soll ein Array von Objekten
          mit name und age als Input nehmen und ein Objekt zurückgeben, bei dem die
          Schlüssel die Altersgruppen sind und die Werte Arrays mit den Namen der
          Personen in dieser Altersgruppe.`,

    codeContent: `const people = [
  { name: "Max", age: 18 },
  { name: "Anna", age: 24 },
  { name: "Tom", age: 15 },
  { name: "Lisa", age: 21 },
  { name: "Ben", age: 8 }
];

groupByAge(people);`,
    codeAnswer: `const groupByAge = (people: { name: string; age: number }[]) => {
 const result: { [key: string]: string[] } = {};
 
 people.forEach(person => {
   const groupStart = Math.floor(person.age / 10) * 10;
   const groupEnd = groupStart + 9;
   const groupKey = groupStart + '-' + groupEnd;
   
   if (!result[groupKey]) {
     result[groupKey] = [];
   }
   
   result[groupKey].push(person.name);
 });
 
 return result;
}`,
  };

  return (
    <VStack spacing={6} align="center" width="100%" p={4}>
      <Box maxW="600px" p={4}>
        <Text>{content.text}</Text>
      </Box>

      <Code
        as="pre"
        display="block"
        p={6}
        borderRadius="md"
        fontSize="sm"
        bg="gray.50"
        width="auto"
        maxW="600px"
      >
        {content.codeContent}
      </Code>

      <Code
        as="pre"
        display="block"
        p={6}
        borderRadius="md"
        fontSize="sm"
        bg="green.50"
        width="auto"
        maxW="600px"
      >
        {content.codeAnswer}
      </Code>
    </VStack>
  );
};

export default FunctionPlayground;
