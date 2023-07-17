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
    'Action', 'Adventure', 'Fighting', 'Misc', 'Platform', 'Puzzle',
    'Racing', 'Role-Playing', 'Shooter', 'Simulation', 'Sports',
    'Strategy'
  ];

  const years = [
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
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
    "2020",
  ];

  const platforms = [
    "2600",
    "3DO",
    "3DS",
    "DC",
    "DS",
    "GB",
    "GBA",
    "GC",
    "GEN",
    "GG",
    "N64",
    "NES",
    "NG",
    "PC",
    "PCFX",
    "PS",
    "PS2",
    "PS3",
    "PS4",
    "PSP",
    "PSV",
    "SAT",
    "SCD",
    "SNES",
    "TG16",
    "WS",
    "Wii",
    "WiiU",
    "X360",
    "XB",
    "XOne",
  ];

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
          Enter your interested tags
        </Typography>
        <TagSelector />
      </Box>
    </div>
  );
};

export default Preference;
