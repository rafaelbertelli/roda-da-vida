import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { questions } from "../../@mocks/questions";
import { useAppContext } from "../../providers";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface IChartQuestion {
  id: string;
  label: string;
  note: string;
}

const data = (chartQuestions: IChartQuestion[]) => {
  return {
    labels: chartQuestions.map((l) => l.label),
    datasets: [
      {
        label: "Nota atribuída",
        data: chartQuestions.map((l) => +l.note),
        backgroundColor: "rgba(100, 200, 250, 0.2)",
        borderColor: "rgba(100, 200, 250, 1)",
        borderWidth: 1,
      },
    ],
  };
};

export default function Chart() {
  const { notes } = useAppContext();

  const chartQuestions: IChartQuestion[] = questions.map((q) => {
    const findNote = notes.find((n) => n.questionId === q.id);

    return {
      id: q.id,
      label: q.label,
      note: findNote?.value ?? "0",
    };
  });

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  };

  return <Radar data={data(chartQuestions)} options={options} />;
}
