import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

// import { useState } from "react";
// import SingleDashboard from "./singleDashboard";
import { useProgressContext } from "./Hooks/ProgressProvider";
// import { red } from "@mui/material/colors";

export default function BasicLineChart() {
  const { currentProgressProvider } = useProgressContext();
  const weight = currentProgressProvider.map((progress) =>
    parseInt(progress.weight)
  );

  const date = currentProgressProvider.map((progress) =>
    parseInt(progress.date)
  );
  return (
    <>
      <h2>My weight Overtime- Add a picture, weight and date in My Progress</h2>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]} //date
        series={[
          {
            data: weight, //weigh
          },
        ]}
        width={1000}
        height={600}
      />
    </>
  );
}
