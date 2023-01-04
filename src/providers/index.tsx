import { createContext, useContext, useState } from "react";
import { IOption } from "../@types/question.interface";
import { DEFAULT_CONTEXT } from "./constants";
import { IAppContextProvider, IGlobalContext } from "./interfaces";

const AppContext = createContext<IGlobalContext>(DEFAULT_CONTEXT);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: IAppContextProvider) {
  const [name, setName] = useState(DEFAULT_CONTEXT.name);
  const [date, setDate] = useState(DEFAULT_CONTEXT.date);
  const [notes, setNotes] = useState(DEFAULT_CONTEXT.notes);

  const getNoteTo = (id: string): string => {
    const result = notes.find((n: IOption) => n.questionId === id);
    return result ? result.value : "";
  };

  const setNoteTo = (value: IOption): void => {
    if (value && value.questionId) {
      const cleanNotes = notes.filter((n: IOption) => n.questionId !== value.questionId);
      setNotes([...cleanNotes, value]);
    }
  };

  const value = {
    name,
    setName,
    date,
    setDate,
    getNoteTo,
    setNoteTo,
    notes,
    setNotes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
