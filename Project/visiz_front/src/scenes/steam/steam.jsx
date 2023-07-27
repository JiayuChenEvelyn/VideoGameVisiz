import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import * as React from "react";
import Topbar from "../global/topbar";
import PlatformBarChart from "../../components/PlatformBarChart";
import PlatformPieChart from "../../components/PlatformPieChart";
import { mockData as Steam_pie } from "../../data/Steam_pie";
import { mockData as Steam_score_pie } from "../../data/Steam_score_pie";
import { mockData as Steam_price_pie } from "../../data/Steam_price_pie";
import { mockData as Steam_data } from "../../data/steamData";
import SteamTable from "../../components/SteamTable";

const Steam = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Topbar
        title={"Steam Related Data Visualization"}
        subtitle={"Steam related data is visualized here"}
      />
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridAutoRows="200px"
        gap="5px"
        margin="10px"
      >
        <Box
          gridColumn="span 1"
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
            <PlatformPieChart data={Steam_pie} />
          </Box>
        </Box>
        <Box
          gridColumn="span 1"
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
            Price Distribution
          </Typography>
          <Box width="100%" height="160px">
            <PlatformPieChart data={Steam_price_pie} />
          </Box>
        </Box>
        <Box
          gridColumn="span 1"
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
            Score Distribution
          </Typography>
          <Box width="100%" height="160px">
            <PlatformPieChart data={Steam_score_pie} />
          </Box>
        </Box>
      </Box>

      <Box
        margin="25px 16px"
        color={colors.primary[100]}
        backgroundColor={colors.primary[400]}
      >
        <SteamTable data={Steam_data} />
      </Box>
    </div>
  );
};

export default Steam;
