import Grid from "@mui/material/Grid";
import { TypographyVariant } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Question } from "../../@types/questions.type";

interface FormQuestionProps {
  question: Question;
  variant: TypographyVariant;
}

export default function FormQuestion(props: FormQuestionProps) {
  console.log("==========", props);
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Typography variant={props.variant} gutterBottom>
          {props.question.label}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant={props.variant} gutterBottom>
          Nota
        </Typography>
      </Grid>
    </Grid>
  );
}
