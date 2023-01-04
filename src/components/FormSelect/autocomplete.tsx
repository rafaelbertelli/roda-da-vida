import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { IOption, IQuestion } from "../../@types/question.interface";
import { useAppContext } from "../../providers";

interface IFormSelect {
  question: IQuestion;
}

export default function FormSelect(props: IFormSelect) {
  const id = `${props.question.id}`;
  const { getNoteTo, setNoteTo } = useAppContext();

  return (
    <Autocomplete
      options={NOTES_FROM_0_TO_10(id)}
      sx={{ width: 100 }}
      renderInput={(params) => <TextField {...params} label="Nota" />}
      disablePortal
      autoSelect
      freeSolo
      id={id}
      value={getNoteTo(id)}
      onChange={(_, data) => setNoteTo(data as IOption)}
    />
  );
}

const NOTES_FROM_0_TO_10: (questionId: string) => IOption[] = (questionId) =>
  Array.from({ length: 11 }, (_, i) => ({
    label: `${i}`,
    value: `${i}`,
    questionId,
  }));
