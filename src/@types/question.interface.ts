export interface IQuestion {
  id: string;
  label: string;
  complement?: string;
}

export interface IOption {
  label: string;
  value: string;
  questionId: string;
}