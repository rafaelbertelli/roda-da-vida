import Grid from "@mui/material/Grid";
import Chart from "../../components/Chart";
import QuizContent from "../../components/QuizContent";
import QuizDescription from "../../components/QuizDescription";
import QuizIdentification from "../../components/QuizIdentification";

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
