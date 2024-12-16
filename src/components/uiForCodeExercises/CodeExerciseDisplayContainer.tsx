'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Code, Heading, Text, VStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { SolutionType, Task } from '@/utils/exercises/types';

const CodeExerciseDisplayContainer: React.FC<Task> = ({
  solution,
  solutionString,
  data,
  content,
}: Task): JSX.Element => {
  const [functionReturn, setFunctionReturn] = useState<string | null>(null);

  if (!data) return <Text>Übung nicht gefunden</Text>;
  return (
    <VStack spacing={6} align="center" width="100%" p={4}>
      <Box maxW="600px" p={4}>
        <Heading>{content.header}</Heading>
        <Text>{content.text}</Text>
      </Box>
      <Heading width={'md'}>Example return:</Heading>
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
        {content.exampleReturn}
      </Code>
      <Heading width={'md'}>Example data:</Heading>
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
        {JSON.stringify(data)}
      </Code>
      <Heading width={'md'}>My solution:</Heading>
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
        {solutionString}
      </Code>
      <Button onClick={() => setFunctionReturn(solution(data))}>
        test the function
      </Button>
      {functionReturn && (
        <>
          <Heading width={'md'}>Test result:</Heading>
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
            {functionReturn}
          </Code>
        </>
      )}
    </VStack>
  );
};

interface DisplayTaskProps {
  fileName: string;
}
const DisplayTask: React.FC<DisplayTaskProps> = ({ fileName }): JSX.Element => {
  const [moduleContent, setModuleContent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadModule = async (): Promise<void> => {
      try {
        const module = await import(`@/utils/exercises/${fileName}`);
        setModuleContent({
          solutionFn: module.default.solutionFn,
          data: module.default.data,
          content: module.default.content,
        });
        setError(null);
      } catch (err) {
        // @ts-ignore
        setError(`Modul konnte nicht geladen werden: ${err.message}`);
      }
    };

    loadModule();
  }, [fileName]);

  const solution: SolutionType = useMemo(() => {
    if (!moduleContent) return null;
    return moduleContent.solutionFn;
  }, [moduleContent]);

  const solutionString: string = useMemo(() => {
    if (!solution) return '';
    return solution.toString();
  }, [solution]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!moduleContent) {
    return <div>Loading...</div>;
  }

  return (
    <CodeExerciseDisplayContainer
      solution={solution}
      solutionString={solutionString}
      data={moduleContent.data}
      content={moduleContent.content}
    />
  );
};
export default DisplayTask;
