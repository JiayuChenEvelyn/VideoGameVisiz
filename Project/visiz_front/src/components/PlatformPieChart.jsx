// Chart template reference on the offical Nivo Chart website https://nivo.rocks/

import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PlatformPieChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
      data={data}
      enableArcLabels={true}
      enableArcLinkLabels={true}
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
            fontSize: "7px",
            fill: colors.grey[100],
          },
        },
      }}
      margin={ { top: 20, right: 0, bottom: 30, left: -80 } }
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={{ from: "color", modifiers: [] }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
    //   legends={[
    //     {
    //       anchor: "bottom",
    //       direction: "column",
    //       justify: false,
    //       translateX: 0,
    //       translateY: 3,
    //       itemsSpacing: -2,
    //       itemWidth: 40,
    //       itemHeight: 13,
    //       itemTextColor: "#999",
    //       itemDirection: "left-to-right",
    //       itemOpacity: 1,
    //       symbolSize: 7,
    //       symbolShape: "circle",
    //       effects: [
    //         {
    //           on: "hover",
    //           style: {
    //             itemTextColor: "#000",
    //           },
    //         },
    //       ],
    //     },
    //   ]}
      legends={[]}
    />
  );
};

export default PlatformPieChart;
