import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import * as React from "react";
import Topbar from "../global/topbar";
import PlatformBarChart from "../../components/PlatformBarChart";
import PlatformPieChart from "../../components/PlatformPieChart";
import { mockData as data } from "../../data/steamBarData";
import { mockData as pieData } from "../../data/steamGenrePieData";
import GameTable from "../../components/GameTable";
import GenreTabs from "../../components/GenreTabs";

const Platform = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tab, setTab] = React.useState("all");
  const queryParameters = new URLSearchParams(window.location.search);
  const platformName = queryParameters.get("p");

  
  return (
    <div id="rightContent" style={isCollapsed?{ marginLeft: "80px" }:{ marginLeft: "250px" }}>
      <Topbar
        title={platformName + " Platform"}
        subtitle={"Video games at " + platformName + " platform"}
      />
      <GenreTabs tab={tab} setTab={setTab} />

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
            <PlatformPieChart data={pieData} />
          </Box>
          <Typography
            sx={{ marginLeft: "20px" }}
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Genre Distribution
          </Typography>
          <Box width="100%" height="160px">
            <PlatformPieChart data={pieData} />
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
            data={data}
            keys={[
              "Action",
              "Adventure",
              "Strategy",
              "RPG",
              "Simulation",
              "Horror",
              "Survival",
              "Puzzle",
              "Indie",
              "Rouguelike",
              "Platformer",
              "twoD_Platform",
              "threeD_Platform",
              "Multiplayer",
              "Casual",
              "Visual_Novel",
              "Arcade",
              "Racing",
              "Sports",
              "Early_Access",
              "Free_to_Play",
              "Mature_Content",
              "Atmospheric",
              "Narrative",
              "Sci_Fi___Fantasy",
              "Historical",
              "Supernatural",
              "Post_apocalyptic",
              "Humor",
              "Music___Sound",
              "Art___Design",
              "Role_Playing",
              "Management___Building",
              "Stealth___Strategy",
              "Exploration___Adventure",
              "Puzzle___Logic",
              "Fantasy___Mythology",
              "Sports___Racing",
              "Education___Learning",
              "VR___AR",
              "Other",
            ]}
          />
          </Box>
        </Box>
      </Box>

      <Box
        margin="25px 16px"
        color={colors.primary[100]}
        backgroundColor={colors.primary[400]}
      >
        <GameTable />
      </Box>
    </div>
  );
};

export default Platform;
