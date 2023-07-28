// Layout style reference from mhttps://codesandbox.io/examples/package/@nivo/bar
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { data } from "../../data/genre";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import SportsMmaOutlinedIcon from "@mui/icons-material/SportsMmaOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeoChart from "../../components/GeoChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import * as React from "react";
import { data as vgsales } from "../../data/vgsales";
import PieChart from "../../components/PieChart";
import Topbar from "../global/topbar";
import InterestsPopOver from "../../components/InterestsPopOver";

const Dashboard = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showInterestPopOver, setShowInterestPopOver] = React.useState(true);


  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Topbar title="DASHBOARD" subtitle="Welcome to GameViz" />
      <Box m="20px">
        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        ></Box>

        {/* GRID & CHARTS */}
        <Box
          mt="-30px"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="134px"
          gap="10px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="3,316"
              subtitle="Action games in total"
              progress={data[0].count / data[0].total}
              icon={
                <SportsMmaOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="2,346"
              subtitle="Sport games in total"
              progress={data[1].count / data[1].total}
              icon={
                <SportsBasketballOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="1,739"
              subtitle="Misc games in total"
              icon={
                <VideogameAssetOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              progress={data[2].count / data[2].total}
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="1,488"
              subtitle="Role playing games in total"
              progress={data[3].count / data[3].total}
              icon={
                <SmartToyOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>

          {/* ROW 2 */}
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Global Sales for each platform
                </Typography>
              </Box>
            </Box>
            <Box height="260px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          {/* Rankings */}

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Top Rank Games
              </Typography>
            </Box>
            {vgsales.slice(1,100).map((game, i) => (
              <Box
                // key={`${game.gameName}-${i}`}
                key={`${game.Name}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {game.Name}
                    {/* {game.gameName} */}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {game.Publisher}
                    {/* {game.publisher} */}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {"Year " + game.Year}
                    {/* {"Year " + game.year} */}
                  </Typography>
                </Box>
                <Box
                  // backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  <Typography color={colors.grey[100]}>
                    {game.Global_Sales}
                    {/* {game.globalSales} */}
                  </Typography>
                  <Typography
                    variant="h9"
                    fontSize="12px"
                    color={colors.grey[100]}
                  >
                    million dollars
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* ROW 3 */}
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Typography
              pl="10px"
              pt="10px"
              variant="h5"
              color={colors.grey[100]}
              fontWeight="600"
            >
              Genres
            </Typography>
            <Box height="230px" display="flex" alignItems="center">
              <PieChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Genre for each platform
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            padding="30px"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
              color={colors.grey[100]}
            >
              Continent Based Sales
            </Typography>
            <Box height="200px">
              <GeoChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
