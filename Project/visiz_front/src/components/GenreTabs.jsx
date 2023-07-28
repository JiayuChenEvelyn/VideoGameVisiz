import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { Typography } from "@mui/material";

export default function GenreTabs({
  tab,
  setTab,
  setTableData,
  wholeTableData,
  setGeoData,
  wholeGeoData,
}) {
  const handleChange = (event, newValue) => {
    setTab(newValue);
    if (newValue === "Action") {
      setTableData(
        wholeTableData.filter((obj) => {
          return obj.Genre === "Action";
        })
      );
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Action"));
    } else if (newValue === "all") {
      setTableData(wholeTableData);
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "all"));
    } else if (newValue === "Adventure") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Adventure"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Adventure"));
    } else if (newValue === "Fighting") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Fighting"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Fighting"));
    } else if (newValue === "Misc") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Misc"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Misc"));
    } else if (newValue === "Platform") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Platform"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Platform"));
    } else if (newValue === "Puzzle") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Puzzle"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Puzzle"));
    } else if (newValue === "Racing") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Racing"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Racing"));
    } else if (newValue === "Role-Playing") {
      setTableData(
        wholeTableData.filter((obj) => obj.Genre === "Role-Playing")
      );
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Role-Playing"));
    } else if (newValue === "Shooter") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Shooter"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Shooter"));
    } else if (newValue === "Simulation") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Simulation"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Simulation"));
    } else if (newValue === "Sport") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Sport"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Sport"));
    } else if (newValue === "Strategy") {
      setTableData(wholeTableData.filter((obj) => obj.Genre === "Strategy"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "Strategy"));
    }
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      id="genreTab"
      sx={{
        maxWidth: { xs: 520, sm: 1280 },
        margin: "-16px 16px 0px 16px",
        "& .MuiTabScrollButton-horizontal": {
          color: "" + colors.grey[100] + "!important",
        },
      }}
      display="flex"
      alignItems="center"
    >
      <Typography
        variant="h5"
        // fontWeight="600"
        color={colors.grey[100]}
      >
        Genre:
      </Typography>
      <Tabs
        // textColor={colors.grey[100]}
        // indicatorColor={colors.grey[100]}
        textColor="secondary"
        indicatorColor="secondary"
        value={tab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab sx={{ color: colors.grey[100] }} value="all" label="All" />
        <Tab sx={{ color: colors.grey[100] }} value="Action" label="Action" />
        <Tab
          sx={{ color: colors.grey[100] }}
          value="Adventure"
          label="Adventure"
        />
        <Tab
          sx={{ color: colors.grey[100] }}
          value="Fighting"
          label="Fighting"
        />
        <Tab sx={{ color: colors.grey[100] }} value="Misc" label="Misc" />
        <Tab
          sx={{ color: colors.grey[100] }}
          value="Platform"
          label="Platform"
        />
        <Tab sx={{ color: colors.grey[100] }} value="Puzzle" label="Puzzle" />
        <Tab sx={{ color: colors.grey[100] }} value="Racing" label="Racing" />
        <Tab
          sx={{ color: colors.grey[100] }}
          value="Role-Playing"
          label="Role Playing"
        />
        <Tab sx={{ color: colors.grey[100] }} value="Shooter" label="Shooter" />
        <Tab
          sx={{ color: colors.grey[100] }}
          value="Simulation"
          label="Simulation"
        />
        <Tab sx={{ color: colors.grey[100] }} value="Sports" label="Sports" />
        <Tab
          sx={{ color: colors.grey[100] }}
          value="Strategy"
          label="Strategy"
        />
      </Tabs>
    </Box>
  );
}
