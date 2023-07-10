import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { Typography } from "@mui/material";

export default function PlatformTabs({
  tab,
  setTab,
  setTableData,
  wholeTableData,
  setGeoData,
  wholeGeoData,
}) {
  const handleChange = (event, newValue) => {
    setTab(newValue);
    if (newValue === "all") {
      setTableData(wholeTableData);
      setGeoData(wholeGeoData);
    } else if (newValue === "DS") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "DS"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "DS"));
    } else if (newValue === "PS2") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "PS2"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "PS2"));
    } else if (newValue === "PS3") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "PS3"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "PS3"));
    } else if (newValue === "Wii") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "Wii"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "Wii"));
    } else if (newValue === "X360") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "X360"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "X360"));
    } else if (newValue === "PSP") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "PSP"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "PSP"));
    } else if (newValue === "PS") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "PS"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "PS"));
    } else if (newValue === "PC") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "PC"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "PC"));
    } else if (newValue === "XB") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "XB"));
      setGeoData(wholeGeoData.filter((obj) => obj.genre === "XB"));
    } else if (newValue === "GBA") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "GBA"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "GBA"));
    } else if (newValue === "GC") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "GC"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "GC"));
    } else if (newValue === "3DS") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "3DS"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "3DS"));
    } else if (newValue === "PSV") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "PSV"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "PSV"));
    } else if (newValue === "N64") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "N64"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "N64"));
    } else if (newValue === "SNES") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "SNES"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "SNES"));
    } else if (newValue === "XOne") {
      setTableData(wholeTableData.filter((obj) => obj.Platform === "XOne"));
      setGeoData(wholeGeoData.filter((obj) => obj.platform === "XOne"));
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
        <Tab sx={{ color: colors.grey[100] }} value="DS" label="DS" />
        <Tab sx={{ color: colors.grey[100] }} value="PS2" label="PS2" />
        <Tab sx={{ color: colors.grey[100] }} value="PS3" label="PS3" />
        <Tab sx={{ color: colors.grey[100] }} value="Wii" label="Wii" />
        <Tab sx={{ color: colors.grey[100] }} value="PSP" label="PSP" />
        <Tab sx={{ color: colors.grey[100] }} value="X360" label="X360" />
        <Tab sx={{ color: colors.grey[100] }} value="PS" label="PS" />
        <Tab sx={{ color: colors.grey[100] }} value="PC" label="PC" />
        <Tab sx={{ color: colors.grey[100] }} value="XB" label="XB" />
        <Tab sx={{ color: colors.grey[100] }} value="GBA" label="GBA" />
        <Tab sx={{ color: colors.grey[100] }} value="3DS" label="3DS" />
        <Tab sx={{ color: colors.grey[100] }} value="PSV" label="PSV" />
        <Tab sx={{ color: colors.grey[100] }} value="PS4" label="PS4" />
        <Tab sx={{ color: colors.grey[100] }} value="N64" label="N64" />
        <Tab sx={{ color: colors.grey[100] }} value="SNES" label="SNES" />
        <Tab sx={{ color: colors.grey[100] }} value="XOne" label="XOne" />
      </Tabs>
    </Box>
  );
}
