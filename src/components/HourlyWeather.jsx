import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  LabelList,
  XAxis,
} from "recharts";
import { useState } from "react";
import data2 from "../api/ReactProjectData.json";

function HourlyWeather() {
  const [item, setItem] = useState(data2.forecast);

  const CustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;

    return (
      <text
        x={x}
        y={y + 20}
        dy={-4}
        fill="#fff"
        fontSize={9.76}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  };

  const data = Object.entries(item).map(([hour, value]) => ({
    name: hour,
    Sıcaklık: parseInt(value, 10),
  }));
  debugger;
  return (
    <div className=" mx-auto w-[95%] h-[60%] ">
      <div className="flex justify-start items-center gap-x-4 pl-2 pt-2">
        <img className="w-[29px] h-[24px]" src="/Group.svg" alt="" />
        <div className="text-[20px]">Hourly Forecast</div>
      </div>
      <ResponsiveContainer height={150}>
        <LineChart data={data}>
          <Line
            type="monotone"
            width={200}
            height={5}
            dataKey="Sıcaklık"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            stroke="#F0F0F0"
            strokeWidth={1.39}
            dot={{ fill: "#F0F0F0" }}
          >
            <LabelList content={<CustomizedLabel />} />
          </Line>
          <XAxis
            tick={{ transform: "translate(0, 5)" }}
            stroke="#F0F0F0"
            dataKey="name"
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HourlyWeather;
