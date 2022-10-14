import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

function Statistic({ stats }) {
  const data = stats.map((e) => ({
    name: e.stat.name,
    ability: e.base_stat,
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 100,
          bottom: 5,
        }}
      >
        <XAxis
          type="number"
          orientation="bottom"
          stroke="#285A64"
          range={[0, 100]}
        />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="ability" fill="#053e76">
          <LabelList
            dataKey="ability"
            position="insideRight"
            style={{ fill: "white" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
export default Statistic;
