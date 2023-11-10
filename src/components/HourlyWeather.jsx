import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Label,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2600,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page Z",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

function HourlyWeather() {
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

  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className=" mx-auto w-[95%] h-[60%] ">
      <div className="flex justify-start items-center gap-x-4 pl-2 pt-2">
        <img className="w-[29px] h-[24px]" src="/Group.svg" alt="" />
        <div className="text-[20px]">Hourly Forecast</div>
      </div>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line
            type="monotone"
            width={300}
            height={5}
            dataKey="pv"
            stroke="#F0F0F0"
            strokeWidth={1.39}
            dot={{ fill: "#F0F0F0" }}
          >
            <Label
              content={({ x, y, value }) => {
                return (
                  <text x={x} y={y} fill="#F0F0F0" textAnchor="middle" dy={-10}>
                    {value}
                  </text>
                );
              }}
            />
            <LabelList content={<CustomizedLabel />} />
          </Line>

          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HourlyWeather;
