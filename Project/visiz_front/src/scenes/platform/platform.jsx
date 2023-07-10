import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import * as React from "react";
import Topbar from "../global/topbar";
import PlatformBarChart from "../../components/PlatformBarChart";
import PlatformPieChart from "../../components/PlatformPieChart";
import { mockData as DS_genresVSyearsBar } from "../../data/DS_genresVSyearBar";
import { mockData as PS2_genresVSyearBar } from "../../data/PS2_genresVSyearBar";
import { mockData as PS3_genresVSyearBar } from "../../data/PS3_genresVSyearBar";
import { mockData as Wii_genresVSyearBar } from "../../data/Wii_genresVSyearBar";
import { mockData as X360_genresVSyearBar } from "../../data/X360_genresVSyearBar";
import { mockData as PSP_genresVSyearBar } from "../../data/PSP_genresVSyearBar";
import { mockData as PS_genresVSyearBar } from "../../data/PS_genresVSyearBar";
import { mockData as DS_pie } from "../../data/DS_pie";
import { mockData as PS2_pie } from "../../data/PS2_pie";
import { mockData as PS3_pie } from "../../data/PS3_pie";
import { mockData as PSP_pie } from "../../data/PSP_pie";
import { mockData as Wii_pie } from "../../data/Wii_pie";
import { mockData as X360_pie } from "../../data/X360_pie";
import { data as DS_continent_sales } from "../../data/DS_continent_sales";
import { data as PS2_continent_sales } from "../../data/PS2_continent_sales";
import { data as PSP_continent_sales } from "../../data/PSP_continent_sales.js";
import { data as PS3_continent_sales } from "../../data/PS3_continent_sales";
import { data as Wii_continent_sales } from "../../data/Wii_continent_sales";
import { data as X360_continent_sales } from "../../data/X360_continent_sales";
import { mockData as DS_data } from "../../data/DS_data";
import { mockData as PS2_data } from "../../data/PS2_data";
import { mockData as PS3_data } from "../../data/PS3_data";
import { mockData as X360_data } from "../../data/X360_data";
import { mockData as PSP_data } from "../../data/PSP_data";
import { mockData as Wii_data } from "../../data/Wii_data";

import GameTable from "../../components/GameTable";
import GenreTabs from "../../components/GenreTabs";
import { useSearchParams } from "react-router-dom";
import PlatformGeoChart from "../../components/PlatformGeoChart";

const Platform = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tab, setTab] = React.useState("all");
  const queryParameters = new URLSearchParams(window.location.search);
  const [tableData, setTableData] = React.useState(DS_data);
  const [wholeTableData, setWholeTableData] = React.useState(DS_data);
  const [geoData, setGeoData] = React.useState(
    DS_continent_sales.filter((obj) => obj.genre === "all")
  );
  const [wholeGeoData, setWholeGeoData] = React.useState(DS_continent_sales);

  const [platformName, setPlatformName] = React.useState(
    queryParameters.get("p")
  );
  const [searchParams] = useSearchParams();

  let barData, pieData;
  React.useEffect(() => {
    const query = searchParams.get("p");
    setPlatformName(query);
    setTab("all");
    if (query === "DS") {
      barData = DS_genresVSyearsBar;
      pieData = DS_pie;
      setGeoData(DS_continent_sales.filter((obj) => obj.genre === "all"));
      setWholeGeoData(DS_continent_sales);
      setTableData(DS_data);
      setWholeTableData(DS_data);
    } else if (query === "PS2") {
      barData = PS2_genresVSyearBar;
      pieData = PS2_pie;
      setGeoData(PS2_continent_sales.filter((obj) => obj.genre === "all"));
      setWholeGeoData(PS2_continent_sales);
      setTableData(PS2_data);
      setWholeTableData(PS2_data);
    } else if (query === "PS3") {
      barData = PS3_genresVSyearBar;
      pieData = PS3_pie;
      setGeoData(PS3_continent_sales.filter((obj) => obj.genre === "all"));
      setWholeGeoData(PS3_continent_sales);
      setTableData(PS3_data);
      setWholeTableData(PS3_data);
    } else if (query === "Wii") {
      barData = Wii_genresVSyearBar;
      pieData = Wii_pie;
      setGeoData(Wii_continent_sales);
      setWholeGeoData(Wii_continent_sales);
      setTableData(Wii_data);
      setWholeTableData(Wii_data);
    } else if (query === "X360") {
      barData = X360_genresVSyearBar;
      pieData = X360_pie;
      setGeoData(X360_continent_sales.filter((obj) => obj.genre === "all"));
      setWholeGeoData(X360_continent_sales);
      setTableData(X360_data);
      setWholeTableData(X360_data);
    } else if (query === "PSP") {
      barData = PSP_genresVSyearBar;
      pieData = PSP_pie;
      setGeoData(PSP_continent_sales.filter((obj) => obj.genre === "all"));
      setWholeGeoData(PSP_continent_sales);
      setTableData(PSP_data);
      setWholeTableData(PSP_data);
    }
  }, [searchParams]);
  // const [barData, setBarData] = React.useState();
  if (platformName === "DS") {
    barData = DS_genresVSyearsBar;
    pieData = DS_pie;
    // geoData = DS_continent_sales;
  } else if (platformName === "PS2") {
    barData = PS2_genresVSyearBar;
    pieData = PS2_pie;
    // geoData = PS2_continent_sales;
  } else if (platformName === "PS3") {
    barData = PS3_genresVSyearBar;
    pieData = PS3_pie;
    // geoData = PS3_continent_sales;
  } else if (platformName === "Wii") {
    barData = Wii_genresVSyearBar;
    pieData = Wii_pie;
    // geoData = Wii_continent_sales;
  } else if (platformName === "X360") {
    barData = X360_genresVSyearBar;
    pieData = X360_pie;
    // geoData = X360_continent_sales;
  } else if (platformName === "PSP") {
    barData = PSP_genresVSyearBar;
    pieData = PSP_pie;
  } else if (platformName === "PS") {
    barData = PS_genresVSyearBar;
    pieData = PS2_pie;
    // geoData = PS2_continent_sales;
  }

  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Topbar
        title={platformName + " Platform"}
        subtitle={"Video games at " + platformName + " platform"}
      />
      <GenreTabs
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
                  return data.id === tab;
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
                  ? [
                      "Misc",
                      "Action",
                      "Simulation",
                      "Adventure",
                      "Puzzle",
                      "Role_Playing",
                      "Sports",
                      "Platform",
                      "Strategy",
                      "Racing",
                      "Shooter",
                      "Fighting",
                    ]
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

export default Platform;
