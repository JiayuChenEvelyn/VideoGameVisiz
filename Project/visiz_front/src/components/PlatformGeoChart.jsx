import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { geoFeatures } from "../data/geoFeatures.js";
const PlatformGeoChart = ({ isDashboard = true, data}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      key={`${data.id}`}
      data={data}
      features={geoFeatures.features}
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
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 700]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      //   enableGraticule={true}
      //   graticuleLineColor="#dddddd"
      borderWidth={0.2}
      borderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: !isDashboard ? 20 : 0,
          translateY: !isDashboard ? -100 : 0,
          itemsSpacing: !isDashboard ? 0 : -5,
          itemWidth: !isDashboard ? 94 : 80,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: colors.grey[100],
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={(data, color) => (
        <div
          key={`${data.feature.id}`}
          style={{
            padding: 12,
            color,
            background: "#ffffff",
            borderRadius: "10px",
          }}
        >
          <strong key={`${data.feature.id}`}>
            {data.feature.id}: {data.feature.value}
          </strong>
        </div>
      )}
    />
  );
};

export default PlatformGeoChart;
