import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { tokens } from "../../theme";
import * as React from "react";
import Topbar from "../global/topbar";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Game = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tab, setTab] = React.useState("all");
  const queryParameters = new URLSearchParams(window.location.search);
  const gameId = queryParameters.get("id");
  const gameName = queryParameters.get("name");
  const [value, setValue] = React.useState(2);

  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Topbar title={gameName} subtitle="Game details" />

      <Box marginLeft="16px">
        <Box display="flex" marginBottom="10px" width="400px">
          <Typography
            variant="h5"
            fontWeight="bold"
            backgroundColor={colors.primary[400]}
            borderRadius="15%"
            pt="3px"
            pb="3px"
            pl="6px"
            pr="6px"
            color={colors.grey[100]}
          >
            Action
          </Typography>
        </Box>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Game urls:</span>
          <a
            style={{ color: colors.grey[100] }}
            href="https://store.steampowered.com/app/2155280"
          >
            https://store.steampowered.com/app/2155280
          </a>
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Developers:</span>
          Reija
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Publishers:</span>
          Reija
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Price:</span>
          HK$ 33.00
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Relased Data:</span>
          2022-02-02
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Supported language:</span>
          English
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>
            Positive reviews / all reviews:
          </span>
          17 / 20
        </Typography>

        <Typography
          margin="17px 0px 7px 0px"
          variant="h4"
          fontWeight="600"
          color={colors.blueAccent[300]}
        >
          ABOUT THE GAME
        </Typography>
        <Typography fontWeight="400" color={colors.grey[100]}>
          Defend yourself against an onslaught of monstrous aliens in a variety
          of cities and landscapes of our beloved home: Earth. Combine equipment
          from your powerful arsenal of weapons, modules, and upgrades in order
          to face stronger and smarter aliens in this 3D top-down roguelite
          shooter
        </Typography>
        <Stack spacing={3} sx={{ marginTop: "30px" }}>
          <Rating
            size="large"
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            sx={{ fontSize: "45px" }}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Stack>
        <Button
          variant="text"
          sx={{
            marginTop: "30px",
            color: colors.grey[100],
            backgroundColor: colors.grey[500],
          }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Game;
