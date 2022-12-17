import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function FormSelect() {
  // const [note, setNote] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setNote(event.target.value as string);
  // };

  return (
    <Autocomplete
      options={NOTES_FROM_0_TO_10}
      sx={{ width: 100 }}
      renderInput={(params) => <TextField {...params} label="Nota" />}
      disablePortal
      autoSelect
      freeSolo
    />
  );
}

const NOTES_FROM_0_TO_10 = Array.from({ length: 11 }, (v, i) => ({
  label: i.toString(),
  value: i,
}));
