import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ transactions }) {
  const monthlyData = {};

  transactions.forEach((t) => {
    const date = new Date(t.id); // id = timestamp
    const month = date.toLocaleString("default", { month: "short" });

    if (!monthlyData[month]) {
      monthlyData[month] = 0;
    }
    monthlyData[month] += t.amount;
  });

  const data = Object.keys(monthlyData).map((month) => ({
    month,
    amount: monthlyData[month],
  }));

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Monthly Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
