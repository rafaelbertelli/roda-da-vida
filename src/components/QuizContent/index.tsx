import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { questions } from "../../@mocks/questions";
import { useAppContext } from "../../providers";
import FormQuestion from "../FormQuestion";

import style from "./style.module.css";

export default function QuizContent() {
  const { notes } = useAppContext();
  const handleClick = () => {
    console.log("=============");
    console.log(notes);
    console.log("=============");
  };

  return (
    <div className={style.content}>
      <Box>
        <FormQuestion
          question={{ id: "1", label: "Áreas da vida", complement: "Nota" }}
          variant="h6"
        />

        <Divider />

        <div className={style.content_body}>
          {questions.map((qt) => (
            <div key={qt.id} className={style.content_body_line}>
              <FormQuestion question={qt} variant={"subtitle1"} useSelector />
            </div>
          ))}
        </div>

        <Divider />

        <Button onClick={handleClick}>Obter todas as notas</Button>
      </Box>
    </div>
  );
}
