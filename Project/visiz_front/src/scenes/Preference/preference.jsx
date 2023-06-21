import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import * as React from "react";
import Topbar from "../global/topbar";
import { Link } from "react-router-dom";
import MultiSelector from "../../components/MultiSelector";
import TagSelector from "../../components/TagSelector";

const Preference = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const genres = [
    "Action",
    "Sports",
    "Misc",
    "Role_Playing",
    "Shooter",
    "Adventure",
    "Racing",
    "Platform",
    "Simulation",
    "Fighting",
    "Strategy",
    "Puzzle",
  ];

  const years = [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
  ];

  const platforms = ["Wii", "NES", "GB", "Steam", "NES", "DS", "PS2"];

  const setGenre = (newValue) => {
    localStorage.setItem("genre", JSON.stringify(newValue));
  };
  const setYear = (newValue) => {
    localStorage.setItem("year", JSON.stringify(newValue));
  };
  const setPlatform = (newValue) => {
    localStorage.setItem("platform", JSON.stringify(newValue));
  };
  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Topbar title="Preferences" subtitle="Define your preference here" />

      <Box marginLeft="16px">
        <Typography
          pl="10px"
          pt="10px"
          variant="h5"
          color={colors.grey[100]}
          fontWeight="600"
        >
          Select your interest genres
        </Typography>
        <MultiSelector
          name="genre"
          selections={genres}
          setSelection={setGenre}
          title="Your interested video game genres"
        />
      </Box>

      <Box marginLeft="16px">
        <Typography
          pl="10px"
          pt="10px"
          variant="h5"
          color={colors.grey[100]}
          fontWeight="600"
        >
          Select your interest video game years
        </Typography>
        <MultiSelector
          name="year"
          selections={years}
          setSelection={setYear}
          title="Your interested video game years"
        />
      </Box>

      <Box marginLeft="16px">
        <Typography
          pl="10px"
          pt="10px"
          variant="h5"
          color={colors.grey[100]}
          fontWeight="600"
        >
          Select your interest video game platforms
        </Typography>
        <MultiSelector
          name="platform"
          selections={platforms}
          setSelection={setPlatform}
          title="Your interested video game platforms"
        />
      </Box>

      <Box marginLeft="16px">
        <Typography
          pl="10px"
          pt="10px"
          variant="h5"
          color={colors.grey[100]}
          fontWeight="600"
        >
          Select your interest video game platforms
        </Typography>
        <TagSelector />
      </Box>
    </div>
  );
};

export default Preference;
