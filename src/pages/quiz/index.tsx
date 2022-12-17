import Grid from "@mui/material/Grid";
import Chart from "../../Components/Chart";
import QuizContent from "../../Components/QuizContent";
import QuizDescription from "../../Components/QuizDescription";
import QuizIdentification from "../../Components/QuizIdentification";

import style from "./style.module.css";

export default function Quiz() {
  return (
    <div className={style.main}>
      <QuizDescription />
      <QuizIdentification />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <QuizContent />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Chart />
        </Grid>
      </Grid>
    </div>
  );
}
