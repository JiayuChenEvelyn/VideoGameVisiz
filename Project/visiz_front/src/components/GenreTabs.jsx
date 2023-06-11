import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { Typography } from "@mui/material";

export default function GenreTabs({tab, setTab}) {

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setTab(newValue);
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
          color: ""+colors.grey[100]+"!important"
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
        <Tab sx={{ color: colors.grey[100] }} value='all' label="All" />
        <Tab sx={{ color: colors.grey[100] }} value='0' label="Item One" />
        <Tab sx={{ color: colors.grey[100] }} value="1" label="Item Two" />
        <Tab sx={{ color: colors.grey[100] }} value="2" label="Item Three" />
        <Tab sx={{ color: colors.grey[100] }} value="3" label="Item Four" />
        <Tab sx={{ color: colors.grey[100] }} value="4" label="Item Five" />
        <Tab sx={{ color: colors.grey[100] }} value="5" label="Item Six" />
        <Tab sx={{ color: colors.grey[100] }} value="6" label="Item Seven" />
        <Tab sx={{ color: colors.grey[100] }} value="7" label="Item One" />
        <Tab sx={{ color: colors.grey[100] }} value="8" label="Item Two" />
        <Tab sx={{ color: colors.grey[100] }} value="9" label="Item Three" />
        <Tab sx={{ color: colors.grey[100] }} value="10" label="Item Four" />
        <Tab sx={{ color: colors.grey[100] }} value="11" label="Item Five" />
        <Tab sx={{ color: colors.grey[100] }} value="12" label="Item Six" />
        <Tab sx={{ color: colors.grey[100] }} value="13" label="Item Seven" />
      </Tabs>
    </Box>
  );
}
