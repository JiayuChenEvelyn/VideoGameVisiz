// Chart template reference on the offical Nivo Chart website https://nivo.rocks/
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import "../assets/barchart.css";
const HomeBarChart = ({ data, isDashboard = false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveBar
      data={data}
      enableLabel={false}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={[
        "Action",
        "Sports",
        "Misc",
        "Role-Playing",
        "Shooter",
        "Adventure",
        "Racing",
        "Platform",
        "Simulation",
        "Fighting",
        "Strategy",
        "Puzzle",
      ]}
      indexBy="Plat"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        legend: !isDashboard ? "Platform" : undefined,
        tickRotation: isDashboard ? 90 : 0,
        legendPosition: "middle",
        legendOffset: 45,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: !isDashboard ? "Genre" : undefined,
        legendPosition: "middle",
        legendOffset: -45,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: !isDashboard ? 2 : -5,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          symbolSize: 20,
          //   effects: [
          //     {
          //       on: "hover",
          //       style: {
          //         itemOpacity: 1,
          //       },
          //     },
          //   ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in platform: " + e.indexValue;
      }}
    />
  );
};

export default HomeBarChart;
