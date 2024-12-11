'use server';
import * as fs from 'fs';
import path from 'path';

export interface FileNameHookReturn {
  files: string[];
}

export const useUtilityFiles = async (): Promise<FileNameHookReturn> => {
  try {
    const exercisesPath = path.join(process.cwd(), 'src', 'utils', 'exercises');
    const files: string[] = fs
      .readdirSync(exercisesPath)
      .filter(
        (file) =>
          (file.endsWith('.tsx') || file.endsWith('.ts')) &&
          file !== 'types.tsx',
      );

    return { files };
  } catch (error) {
    return {
      files: [],
    };
  }
};
