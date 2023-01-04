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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = +e.target.value;

    if (typeof targetValue !== "number" || targetValue < 0 || targetValue > 10) {
      return;
    }

    const value: IOption = {
      label: props.question.label,
      value: `${targetValue}`,
      questionId: props.question.id,
    };

    setNoteTo(value);
  };

  return (
    <TextField
      id={`${props.question.id}`}
      name="note"
      label="Nota de 0 à 10"
      fullWidth
      type="number"
      onChange={handleChange}
      InputProps={{ inputProps: { min: 0, max: 10 } }}
    />
  );
}
