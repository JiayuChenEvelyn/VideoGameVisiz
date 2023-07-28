import { Box, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { tokens } from "../../theme";
import * as React from "react";
import Topbar from "../global/topbar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const Game = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const queryParameters = new URLSearchParams(window.location.search);
  const gameName = queryParameters.get("name");
  const [value, setValue] = React.useState(2);
  const [score, setScore] = React.useState(100);
  const [people, setPeople] = React.useState(0);
  const [gameInfo, setGameInfo] = React.useState({});

  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("http://localhost:8080/game/showGameDetail?gameName=" + gameName)
      .then((res) => res.json())
      .then((data) => {
        console.log("http://localhost:8080/game/showGameDetail?gameName=", data);
        if (data.state === 200) {
          setGameInfo(data.data);
          setScore(data.data.rating);
          setValue(data.data.rating/20);
          setPeople(data.data.rateCount);
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
        console.log("http://localhost:8080/game/updateRating?gameName=" +
        gameName +
        "&rating=" +
        value, data);
        if (data.state === 200) {
          setValue(data.data/20);
          setScore(data.data);
          setPeople(people+1);
          navigate("/preference");
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
          {gameInfo.globalSales} millions
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Relased Year:</span>
          {gameInfo.year}
        </Typography>
        <Typography
          margin="0px 0px 7px 0px"
          fontWeight="400"
          color={colors.grey[100]}
        >
          <span style={{ paddingRight: "10px" }}>Game rating</span>
          {score} rated by {people} nubers of people
        </Typography>

        <Stack spacing={3} sx={{ marginTop: "30px" }}>
          <Rating
            value={value}
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
