import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import style from "./style.module.css";

export default function QuizIdentification() {
  return (
    <div className={style.identification}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField id="name" label="Qual seu nome?" fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="date" label="Data" fullWidth />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
