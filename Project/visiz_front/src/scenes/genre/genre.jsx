import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import * as React from "react";
import Topbar from "../global/topbar";
import PlatformBarChart from "../../components/PlatformBarChart";
import PlatformPieChart from "../../components/PlatformPieChart";
import { mockData as Action_platformsVSyearBar } from "../../data/Action_platformsVSyearBar";
import { mockData as Adventure_platformsVSyearBar } from "../../data/Adventure_platformsVSyearBar";
import { mockData as Fighting_platformsVSyear } from "../../data/Fighting_platformsVSyear";
import { mockData as Puzzle_platformsVSyear } from "../../data/Puzzle_platformsVSyear";
import { mockData as Misc_platformsVSyear } from "../../data/Misc_platformsVSyear";
import { mockData as Platform_platformsVSyear } from "../../data/Platform_platformsVSyear";
import { mockData as Action_pie } from "../../data/Action_pie";
import { mockData as Adventure_pie } from "../../data/Adventure_pie";
import { mockData as Puzzle_pie } from "../../data/Puzzle_pie";
import { mockData as Fighting_pie } from "../../data/Fighting_pie";
import { mockData as Misc_pie } from "../../data/Misc_pie";
import { mockData as Platform_pie } from "../../data/Platform_pie";
import { mockData as Action_continent_sales } from "../../data/Action_continent_sales";
import { mockData as Adventure_continent_sales } from "../../data/Adventure_continent_sales";
import { mockData as Fighting_continent_sales } from "../../data/Fighting_continent_sales";
import { mockData as Platform_continent_sales } from "../../data/Platform_continent_sales";
import { mockData as Puzzle_continent_sales } from "../../data/Puzzle_continent_sales";
import { mockData as Misc_continent_sales } from "../../data/Misc_continent_sales";
import { mockData as Action_data } from "../../data/Action_data";
import { mockData as Adventure_data } from "../../data/Adventure_data";
import { mockData as Fighting_data } from "../../data/Fighting_data";
import { mockData as Misc_data } from "../../data/Misc_data";
import { mockData as Puzzle_data } from "../../data/Puzzle_data";
import { mockData as Platform_data } from "../../data/Platform_data";

import GameTable from "../../components/GameTable";
import { useSearchParams } from "react-router-dom";
import PlatformGeoChart from "../../components/PlatformGeoChart";
import PlatformTabs from "../../components/PlatformTabs";

const Genre = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tab, setTab] = React.useState("all");
  const queryParameters = new URLSearchParams(window.location.search);
  const [tableData, setTableData] = React.useState(Action_data);
  const [wholeTableData, setWholeTableData] = React.useState(Action_data);
  const [geoData, setGeoData] = React.useState(
    Action_continent_sales.filter((obj) => obj.platform === "all")
  );
  const [wholeGeoData, setWholeGeoData] = React.useState(Action_continent_sales);

  const [genreName, setGenreName] = React.useState(
    queryParameters.get("g")
  );
  const [searchParams] = useSearchParams();

  let barData, pieData;
  React.useEffect(() => {
    const query = searchParams.get("g");
    setGenreName(query);
    setTab("all");
    if (query === "Action") {
      barData = Action_platformsVSyearBar;
      pieData = Action_pie;
      setGeoData(Action_continent_sales.filter((obj) => obj.platform === "all"));
      setWholeGeoData(Action_continent_sales);
      setTableData(Action_data);
      setWholeTableData(Action_data);
    } else if (query === "Adventure") {
      barData = Adventure_platformsVSyearBar;
      pieData = Adventure_pie;
      setGeoData(Adventure_continent_sales.filter((obj) => obj.platform === "all"));
      setWholeGeoData(Adventure_continent_sales);
      setTableData(Adventure_data);
      setWholeTableData(Adventure_data);
    } else if (query === "Fighting") {
      barData = Fighting_platformsVSyear;
      pieData = Fighting_pie;
      setGeoData(Platform_continent_sales.filter((obj) => obj.platform === "all"));
      setWholeGeoData(Platform_continent_sales);
      setTableData(Fighting_data);
      setWholeTableData(Fighting_data);
    } else if (query === "Puzzle") {
      barData = Puzzle_platformsVSyear;
      pieData = Puzzle_pie;
      setGeoData(Platform_continent_sales.filter((obj) => obj.platform === "all"));
      setWholeGeoData(Puzzle_continent_sales);
      setTableData(Puzzle_data);
      setWholeTableData(Puzzle_data);
    } else if (query === "Misc") {
      barData = Misc_platformsVSyear;
      pieData = Misc_pie;
      setGeoData(Misc_continent_sales.filter((obj) => obj.platform === "all"));
      setWholeGeoData(Misc_continent_sales);
      setTableData(Misc_data);
      setWholeTableData(Misc_data);
    } else if (query === "Platform") {
      barData = Platform_platformsVSyear;
      pieData = Platform_pie;
      setGeoData(Fighting_continent_sales.filter((obj) => obj.platform === "all"));
      setWholeGeoData(Fighting_continent_sales);
      setTableData(Platform_data);
      setWholeTableData(Platform_data);
    }
  }, [searchParams]);
  // const [barData, setBarData] = React.useState();
  if (genreName === "Action") {
    barData = Action_platformsVSyearBar;
    pieData = Action_pie;
    // geoData = Action_continent_sales;
  } else if (genreName === "Adventure") {
    barData = Adventure_platformsVSyearBar;
    pieData = Adventure_pie;
    // geoData = Adventure_continent_sales;
  } else if (genreName === "Fighting") {
    barData = Fighting_platformsVSyear;
    pieData = Fighting_pie;
    // geoData = Platform_continent_sales;
  } else if (genreName === "Puzzle") {
    barData = Puzzle_platformsVSyear;
    pieData = Puzzle_pie;
    // geoData = Puzzle_continent_sales;
  } else if (genreName === "Misc") {
    barData = Misc_platformsVSyear;
    pieData = Misc_pie;
    // geoData = Misc_continent_sales;
  } else if (genreName === "Platform") {
    barData = Platform_platformsVSyear;
    pieData = Platform_pie;
  }

  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Topbar
        title={genreName + " Platform"}
        subtitle={"Video games at " + genreName + " platform"}
      />
      <PlatformTabs
        tab={tab}
        setTab={setTab}
        setTableData={setTableData}
        wholeTableData={wholeTableData}
        setGeoData={setGeoData}
        wholeGeoData={wholeGeoData}
      />

      <Box
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridAutoRows="350px"
        gap="10px"
        margin="16px"
      >
        <Box
          gridColumn="span 2"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            sx={{ marginLeft: "20px" }}
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Genre Distribution
          </Typography>
          <Box width="100%" height="160px">
            {tab === "all" ? (
              <PlatformPieChart data={pieData} />
            ) : (
              <PlatformPieChart
                data={pieData.filter(function (data) {
                  return data.label === tab;
                })}
              />
            )}
          </Box>
          <Typography
            sx={{ marginLeft: "20px" }}
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Global Sales Distribution
          </Typography>
          <Box width="100%" height="160px">
            <PlatformGeoChart data={geoData} />
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography
            sx={{ marginLeft: "20px" }}
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            New Released Games Count
          </Typography>
          <Box width="100%" height="330px">
            <PlatformBarChart
              data={barData}
              keys={
                tab === "all"
                  ? ['DS',
                  'Wii',
                  'PSP',
                  'GBA',
                  'PS',
                  'PC',
                  'threeDS',
                  'PS2',
                  'GB',
                  'NES',
                  'SNES',
                  'GC',
                  'N64',
                  '2600',
                  'XB',
                  'X360',
                  'SAT',
                  'WiiU',
                  'PSV',
                  'PS3',
                  'PS4',
                  'threeDO']
                  : [tab + ""]
              }
            />
          </Box>
        </Box>
      </Box>

      <Box
        margin="25px 16px"
        color={colors.primary[100]}
        backgroundColor={colors.primary[400]}
      >
        <GameTable data={tableData} />
      </Box>
    </div>
  );
};

export default Genre;
