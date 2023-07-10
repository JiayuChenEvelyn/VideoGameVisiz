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
  const gameName = queryParameters.get("name");
  const [value, setValue] = React.useState(2);
  const [gameInfo, setGameInfo] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:8080/game/showGameDetail?gameName=" + gameName)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        console.log("data.data", data.data);
        if (data.state === 200) {
          setGameInfo(data.data);
          setValue(data.data.rating/20);
        }
      })
      .catch((e) => {
        console.log("Error:", e);
        alert(e);
      });
  }, []);

  const updateScore = () => {
    console.log("value",value);
    fetch(
      "http://localhost:8080/game/updateRating?gameName=" +
        gameName +
        "&rating=" +
        value
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.state === 200) {
          setValue(data.data/20);
        }
      })
      .catch((e) => {
        console.log("Error:", e);
      });
  };

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
            {gameInfo.genre}
          </Typography>
        </Box>
        {/* <Typography
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
        </Typography> */}
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Publishers:</span>
          {gameInfo.publisher}
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Sales:</span>${" "}
          {gameInfo.globalSales}
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Relased Data:</span>
          {gameInfo.year}
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Game rating</span>
          {gameInfo.rating} rated by {gameInfo.rateCount} people
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
          onClick={updateScore}
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
