'use client';
import { useEffect, useState } from 'react';
import { FileNameHookReturn, useUtilityFiles } from './FileNameHook';

interface UseExerciseHookReturn {
  files: string[];
  isLoading: boolean;
}

export const useExercises = (): UseExerciseHookReturn => {
  const [files, setFiles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFiles = async (): Promise<void> => {
      try {
        const result: FileNameHookReturn = await useUtilityFiles();
        setFiles(result.files);
      } catch (error) {
        console.error('Error loading files:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFiles();
  }, []);

  return { files, isLoading };
};
