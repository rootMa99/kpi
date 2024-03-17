import c from "./Charts.module.css";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

const Charts = (p) => {
  const data = {
    labels: p.title==="monthly"? [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ]:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    datasets: [
      {
        type: "line",
        //label: "Target Data",
        data: [19, 6, 9, 10, 7, 8, 13, 11, 15, 2, 17],
        backgroundColor: "#F84018",
        pointHoverBorderColor: "#FAF0E6",
        borderColor: "#F84018",
        fill: false,
        tension: 0.3,
        borderWidth: 3,
        borderCapStyle: "round",
        pointHoverBackgroundColor: "rgb(88, 3, 3)",
        pointHoverRadius: 8,
        pointBorderColor: "#F84018",
        pointBorderWidth: 8,
        pointRadius: 3,
        borderDash: [5, 7],
      },
      {
        type: "bar",
        //label: "Actual Data",
        data: [17, 19, 6, 15, 2, 13, 7, 8, 9, 10, 11],
        backgroundColor: ["#D83F31", "#219C90", "#D83F31","#219C90","#D83F31","#219C90","#D83F31","#D83F31","#D83F31", "#219C90", "#D83F31"],
        //hoverBackgroundColor: "#950101",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "white",
          fontWeight: "bold",
        },
      },
      y: {
        grid: {
          color: "#f3f3f34f",
        },
        ticks: {
          display: false,
          color: "white",
          fontWeight: "bold",
        },
        y: {
          stacked: true,
        },
        beginAtZero: true,
        // suggestedMin:
        //   p.type === "ab" || p.type === "hc" || p.type === "dt"
        //     ? 0
        //     : minBarValue !== 0
        //     ? minBarValue - 10
        //     : minBarValue,
        // suggestedMax: maxBarValue + 20,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#FAF0E6",
        },
        display: false,
      },
      datalabels: {
        display: true,
      },
    },
    animation: {
      onComplete: (animation) => {
        const { chart } = animation;
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset, index) => {
          const meta = chart.getDatasetMeta(index);
          meta.data.forEach((element, index) => {
            const data = dataset.data[index];
            let xPos, yPos;
            if (dataset.type === "bar") {
              xPos = element.x;
              yPos = element.y + 10;
            } else if (dataset.type === "line") {
              xPos = element.x;
              yPos = element.y - 5;
            }
            ctx.save();
            ctx.textAlign = "center";
            ctx.fillStyle = dataset.type === "bar" ? "#FFFAD7" : "#EEEEEE";
            ctx.font = "17px Arial";
            ctx.fillText(data, xPos, yPos);
            ctx.restore();
          });
        });
      },
    },
  };
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    BarElement
  );
  return (
    <div className={c.chartHolder}>
    <div className={c.title}>
    <span></span>
    <h3> {p.title} </h3>
    <span></span>
    </div>
      <Line data={data} options={options} />
    </div>
  );
};
export default Charts;
