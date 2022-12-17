import Grid from "@mui/material/Grid";
import { TypographyVariant } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";
import { Question } from "../../@types/questions.type";
import FormSelect from "../FormSelect";

interface FormQuestionProps {
  question: Question;
  variant: TypographyVariant;
}

export default function FormQuestion(
  props: FormQuestionProps,
  children?: ReactElement
) {
  console.log("==========", props);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Typography variant={props.variant} gutterBottom align="right">
          {props.question.label}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        {!!props.question.complement ? (
          <Typography variant={props.variant} gutterBottom align="left">
            {props.question.complement}
          </Typography>
        ) : (
          <FormSelect />
        )}
      </Grid>
    </Grid>
  );
}
