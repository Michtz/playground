export interface Task {
  solution: SolutionType;
  solutionString: string;
  data: any;
  content: Content;
}

export interface Content {
  id: string;
  header: string;
  text: string;
  exampleReturn: string;
}

export type SolutionType = (data: string[]) => string;
