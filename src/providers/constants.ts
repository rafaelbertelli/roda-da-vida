import { IOption } from "../@types/question.interface";

export const DEFAULT_CONTEXT = {
  name: "",
  setName: () => {},
  date: null,
  setDate: () => {},
  notes: [] as IOption[],
  setNotes: () => {},
  getNoteTo: () => "",
  setNoteTo: () => {},
};
