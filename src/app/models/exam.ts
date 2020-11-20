export interface Question {
    questionId: number;
    description: string;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
    answerE?: string;
    correctAnswer: string;
    questionImageUrl?: string;
    subject: string;
    done: boolean;
    correct: boolean;
}

export interface Exam {
    examId: number;
    university: string;
    year: number;
    examImageUrl: string;
    questions: Question[];
}