import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { AppContext } from "../../context";

import style from "./style.module.css";

export default function QuizIdentification() {
  const { identification, setIdentification } = useContext(AppContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("........", e.target.name, e.target.value);
    console.log("user", identification);
    setIdentification({ user: e.target.value });
    console.log("user2", identification);
  };

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
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Data"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
