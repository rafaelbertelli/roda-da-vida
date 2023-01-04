import Grid from "@mui/material/Grid";
import { TypographyVariant } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { IQuestion } from "../../@types/question.interface";
import FormSelect from "../FormSelect";

interface IFormQuestionProps {
  question: IQuestion;
  variant: TypographyVariant;
  useSelector?: boolean;
}

export default function FormQuestion(props: IFormQuestionProps) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Typography variant={props.variant} gutterBottom align="right">
          {props.question.label}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        {!!props.question.complement && (
          <Typography variant={props.variant} gutterBottom align="left">
            {props.question.complement}
          </Typography>
        )}
        {!!props.useSelector && <FormSelect question={props.question} />}
      </Grid>
    </Grid>
  );
}
