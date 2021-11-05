import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <>
      <div>
        <Bar
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
              {
                label: "Quantity",
                data: [12, 25, 22, 36, 13, 9],
                backgroundColor: "#666",
                borderWidth: 1,
              },
            ],
          }}
          width={600}
          height={420}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "TITLE",
                fullSize: true,
                font: {
                  size: 40,
                },
              },
              legend: {
                font: {
                  size: 25,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default BarChart;