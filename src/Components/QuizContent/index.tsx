import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
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

        <Divider />

        <div className={style.content_body}>
          {questions.map((qt) => (
            <div key={qt.id} className={style.content_body_line}>
              <FormQuestion question={qt} variant={"subtitle1"} />
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
