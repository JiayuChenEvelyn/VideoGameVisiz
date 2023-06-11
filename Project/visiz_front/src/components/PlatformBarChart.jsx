import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import "../assets/barchart.css";

const PlatformBarChart = ({data, keys}) => {
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
            fontSize: 8,
          },
        },
      }}
    //   keys={[
    //     "Action",
    //     "Adventure",
    //     "Strategy",
    //     "RPG",
    //     "Simulation",
    //     "Horror",
    //     "Survival",
    //     "Puzzle",
    //     "Indie",
    //     "Rouguelike",
    //     "Platformer",
    //     "twoD_Platform",
    //     "threeD_Platform",
    //     "Multiplayer",
    //     "Casual",
    //     "Visual_Novel",
    //     "Arcade",
    //     "Racing",
    //     "Sports",
    //     "Early_Access",
    //     "Free_to_Play",
    //     "Mature_Content",
    //     "Atmospheric",
    //     "Narrative",
    //     "Sci_Fi___Fantasy",
    //     "Historical",
    //     "Supernatural",
    //     "Post_apocalyptic",
    //     "Humor",
    //     "Music___Sound",
    //     "Art___Design",
    //     "Role_Playing",
    //     "Management___Building",
    //     "Stealth___Strategy",
    //     "Exploration___Adventure",
    //     "Puzzle___Logic",
    //     "Fantasy___Mythology",
    //     "Sports___Racing",
    //     "Education___Learning",
    //     "VR___AR",
    //     "Other"
    //   ]}
      keys={keys}
      indexBy="year"
      margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
      padding={0.5}
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
        legend: "Year",
        tickRotation: 90 ,
        legendPosition: "middle",
        legendOffset: 45,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Count",
        legendPosition: "middle",
        legendOffset: -50,
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
          translateX: 110,
          translateY: 50,
          itemsSpacing: -4,
          itemWidth: 100,
          itemHeight: 12,
          itemDirection: "left-to-right",
          symbolSize: 5,
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
        return e.id + ": " + e.formattedValue + " at Steam: " + e.indexValue;
      }}
    />
  );
};

export default PlatformBarChart;
