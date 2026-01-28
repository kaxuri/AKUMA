export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  codeSnippet?: string;
  image?: string;
  answers: Answer[];
  correctAnswer: string;
}

export interface QuizState {
  timeRemaining: number;
  answers: Record<number, string>;
}

export interface QuizResult {
  date: string;
  correctAnswers: number;
  totalQuestions: number;
  percentCorrect: number;
  timeSpent: number;
  category: string;
}

export interface  Exam {
  id: string
  title: string
  description: string
  year: number
  session: string
  category: string
  downloadUrl: string
}