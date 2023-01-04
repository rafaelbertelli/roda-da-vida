import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import { useCallback, useEffect } from "react";
import { useAppContext } from "../../providers";

import style from "./style.module.css";

const getDateNow: () => string = () => dayjs(new Date()).toString();

export default function QuizIdentification() {
  const { name, setName, date, setDate } = useAppContext();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDate = (value: Dayjs | null) => {
    setDate(value?.toString() ?? getDateNow());
  };

  const startDatepicker = useCallback(() => setDate(getDateNow()), [setDate]);
  useEffect(startDatepicker, [startDatepicker]);

  return (
    <div className={style.identification}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              id="name"
              name="name"
              label="Qual seu nome?"
              fullWidth
              onChange={handleName}
              value={name}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"pt-br"}>
              <DateTimePicker
                label="Data"
                value={dayjs(date)}
                onChange={handleDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
