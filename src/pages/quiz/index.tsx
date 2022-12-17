import QuizContent from "../../Components/QuizContent";
import QuizDescription from "../../Components/QuizDescription";
import QuizIdentification from "../../Components/QuizIdentification";

import style from "./style.module.css";

export default function Quiz() {
  return (
    <div className={style.main}>
      <QuizDescription />
      <QuizIdentification />
      <QuizContent />
    </div>
  );
}
