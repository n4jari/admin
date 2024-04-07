"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    visit: 2000,
    click: 3300,
  },
  {
    name: "Tue",
    visit: 1800,
    click: 3000,
  },
  {
    name: "Wed",
    visit: 3200,
    click: 3900,
  },
  {
    name: "Thu",
    visit: 2100,
    click: 2900,
  },
  {
    name: "Fri",
    visit: 4000,
    click: 4400,
  },
  {
    name: "Sat",
    visit: 3000,
    click: 3800,
  },
  {
    name: "Sun",
    visit: 2240,
    click: 3870,
  },
];

const Chart = () => {
  return (
    <div className="bg-soft rounded-md p-4 " style={{height:450}}>
      <h2 className="text-soft fo nt-light mb-4">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 40,
          }}
        >
            <Legend verticalAlign="top"  />


          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#222", border: "none" }} />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
