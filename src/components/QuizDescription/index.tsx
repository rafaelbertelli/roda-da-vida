import Typography from "@mui/material/Typography";
import style from "./style.module.css";

export default function QuizDescription() {
  return (
    <div className={style.description}>
      <Typography variant="h3" gutterBottom className={style.description_title}>
        A Roda da vida
      </Typography>
      <Typography variant="subtitle1">
        Dê uma nota entre 1 e 10 para cada área da vida.
      </Typography>
      <Typography variant="subtitle1">
        Refaça a avaliação e compare após 3 meses.
      </Typography>
      <Typography variant="subtitle1">
        Não pense muito ao dar as notas, utilize a intuição.
      </Typography>
    </div>
  );
}
