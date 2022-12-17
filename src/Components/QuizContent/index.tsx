import Box from "@mui/material/Box";
import { questions } from "../../@mocks/questions";
import FormQuestion from "../FormQuestion";

import style from "./style.module.css";

export default function QuizContent() {
  return (
    <div className={style.content}>
      <Box>
        <FormQuestion
          question={{ id: 1, label: "Áreas da vida", complement: "Nota" }}
          variant="h6"
        />
        {questions.map((qt) => (
          <FormQuestion key={qt.id} question={qt} variant={"subtitle1"} />
        ))}
      </Box>
    </div>
  );
}
