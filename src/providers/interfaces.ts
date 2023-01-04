import { Dispatch, ReactNode, SetStateAction } from "react";
import { IOption } from "../@types/question.interface";

export interface IAppContextProvider {
  children: ReactNode;
}

export interface IGlobalContext {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  date: string | null;
  setDate: Dispatch<SetStateAction<any>>;
  // note: IOption;
  // setNote: Dispatch<SetStateAction<any>>;
  notes: IOption[];
  setNotes: Dispatch<SetStateAction<any>>;
  getNoteTo: (i: string) => string;
  setNoteTo: (n: IOption) => void;
}