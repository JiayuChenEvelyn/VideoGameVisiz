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
import PieChart from "../../components/PieChart";
import Topbar from "../global/topbar";
import HomeTable from "../../components/HomeTable";
import HomeBarChart from "../../components/HomeBarChart";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import HomePieChart from "../../components/HomePieChart";
import Platform from "../platform/platform";

const CustomizedHome = ({ isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const tagValue = JSON.parse(localStorage.getItem("tag")) || [];
  const yearValue = JSON.parse(localStorage.getItem("year")) || [];
  const genreValue = JSON.parse(localStorage.getItem("genre")) || [];
  const platformValue = JSON.parse(localStorage.getItem("platform")) || [];
  var preferenceComplete = true;
  if (
    yearValue.length == 0 ||
    genreValue.length == 0 ||
    platformValue.length == 0
  ) {
    preferenceComplete = false;
  }

  const [topVgSales, setTopVgSales] = React.useState([]);
  const [genreCount, setGenreCount] = React.useState([]);
  const [barData, setBarData] = React.useState([]);
  const [slideValue, setSlideValue] = React.useState([1900, 2020]);
  const [pieYear, setPieYear] = React.useState(yearValue[0]);
  const [piePlatform, setPiePlatform] = React.useState(platformValue[0]);

  const handleSlideChange = (event, newValue) => {
    setSlideValue(newValue);
  };

  const icon = {
    Action: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Sports: (
      <SportsBasketballOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Misc: (
      <VideogameAssetOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Role_Playing: (
      <SmartToyOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Shooter: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Adventure: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Racing: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Platform: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Simulation: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Fighting: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Strategy: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
    Puzzle: (
      <SportsMmaOutlinedIcon
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    ),
  };

  // get table data
  React.useEffect(() => {
    if (preferenceComplete) {
      setTopVgSales([
        {
          rank: "1",
          gameName: "Wii Sports",
          platform: "Wii",
          year: "2006",
          genre: "Sports",
          publisher: "Nintendo",
          NASales: "41.49",
          EUSales: "29.02",
          JPSales: "3.77",
          otherSales: "8.46",
          globalSales: "82.74",
        },
        {
          rank: "2",
          gameName: "Super Mario Bros.",
          platform: "NES",
          year: "1985",
          genre: "Platform",
          publisher: "Nintendo",
          NASales: "29.08",
          EUSales: "3.58",
          JPSales: "6.81",
          ptherSales: "0.77",
          globalSales: "40.24",
        },
      ]);
    }
  }, []);
  //   React.useEffect(() => {
  //     if (preferenceComplete) {
  //       fetch(
  //         "http://localhost:8080/game/showTop10?genre=Sports&platform=Wii&year=2000"
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log("data", data);
  //           console.log("data.data", data.data);
  //           if (data.status === 200) {
  //             setTopVgSales(data.data);
  //           }
  //         })
  //         .catch((e) => {
  //           console.log("Error:", e);
  //           alert(e);
  //         });
  //     }
  //   }, []);

  // get genre data
  React.useEffect(() => {
    if (preferenceComplete) {
      setGenreCount([
        {
          genre: "Action",
          count: 3316,
          total: 16598,
        },
        {
          genre: "Sports",
          count: 2346,
          total: 16598,
        },
        {
          genre: "Misc",
          count: 1739,
          total: 16598,
        },
      ]);
    }
  }, []);

  // get pie data
  //   React.useEffect(() => {
  //     if (preferenceComplete) {
  //       setBarData([
  //         {
  //           id: "Action",
  //           label: "Action",
  //           value: 3316,
  //           //   "color": "hsl(336, 70%, 50%)"
  //         },
  //         {
  //           id: "Sports",
  //           label: "Sports",
  //           value: 2346,
  //           //   "color": "hsl(222, 70%, 50%)"
  //         },
  //         {
  //           id: "Misc",
  //           label: "Misc",
  //           value: 1739,
  //           //   "color": "hsl(120, 70%, 50%)"
  //         },
  //         {
  //           id: "Role_Playing",
  //           label: "Role_Playing",
  //           value: 1488,
  //           //   "color": "hsl(223, 70%, 50%)"
  //         },
  //       ]);
  //     }
  //   });

  React.useEffect(() => {
    if (preferenceComplete) {
      fetch(
        "http://localhost:8080/game/showPlatformGenreProportion?platform=" +
          { piePlatform } +
          "&year=" +
          { pieYear }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          console.log("data.data", data.data);
          if (data.status === 200) {
            setBar1Data(data.yearValue[0]);
          }
        })
        .catch((e) => {
          console.log("Error:", e);
          alert(e);
        });
    }
  }, []);

  const handlePieChartYearChange = (event) => {
    setPieYear(event.target.value);
    fetch(
        "http://localhost:8080/game/showPlatformGenreProportion?platform=" +
          { piePlatform } +
          "&year=" +
          { pieYear }
      )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        console.log("data.data", data.data);
        if (data.state === 200) {
          setBarData(data.data);
        }
      })
      .catch((e) => {
        console.log("Error:", e);
        alert(e);
      });
  };

  const handlePieChartPlatformChange = (event) => {
    setPiePlatform(event.target.value);
    fetch(
        "http://localhost:8080/game/showPlatformGenreProportion?platform=" +
          { piePlatform } +
          "&year=" +
          { pieYear }
      )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        console.log("data.data", data.data);
        if (data.state === 200) {
          setBarData(data.data);
        }
      })
      .catch((e) => {
        console.log("Error:", e);
        alert(e);
      });
  };

  if (preferenceComplete) {
    return (
      <div
        id="rightContent"
        style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
      >
        <Topbar title="Home" subtitle="Customized home from Visiz" />
        <Box marginLeft="16px">
          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {genreCount.map((data) => (
              <Box
                width="30%"
                height="120px"
                borderRadius="12px"
                marginBottom="10px"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <StatBox
                  title={data.count}
                  subtitle={data.genre + " games in total"}
                  progress={data.count / data.total}
                  icon={icon[data.genre]}
                />
              </Box>
            ))}
          </div>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            //   colors={colors.grey[100]}
            pt="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Top Rank Games
            </Typography>
          </Box>
          <HomeTable data={topVgSales} />
          <Box sx={{ width: "50%" }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <Typography color={colors.grey[100]}>1990</Typography>
              <Slider
                style={{ color: 1 == 1 ? colors.blueAccent[200] : "grey" }}
                aria-label="Volume"
                value={slideValue}
                onChange={handleSlideChange}
              />
              <Typography color={colors.grey[100]}>2020</Typography>
            </Stack>
          </Box>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Box width="50%" height="250px" mt="20px">
              <LineChart isDashboard={false} data="" />
            </Box>
            <Box width="50%" height="250px" mt="20px">
              <LineChart isDashboard={false} data="" />
            </Box>
          </div>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "10px" }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography color={colors.grey[100]}>
                  Select Year from your preference
                </Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handlePieChartYearChange}
                value={pieYear}
              >
                {yearValue.map((year) => (
                  <FormControlLabel
                    value={year}
                    control={
                      <Radio
                        sx={{
                          color: colors.grey[100],
                          "&.Mui-checked": {
                            color: colors.grey[100],
                          },
                        }}
                      />
                    }
                    label={
                      <Typography color={colors.grey[100]}>{year}</Typography>
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "10px" }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography color={colors.grey[100]}>
                  Select Platforms from your preference
                </Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handlePieChartPlatformChange}
                value={piePlatform}
              >
                {platformValue.map((platform) => (
                  <FormControlLabel
                    value={platform}
                    control={
                      <Radio
                        sx={{
                          color: colors.grey[100],
                          "&.Mui-checked": {
                            color: colors.grey[100],
                          },
                        }}
                      />
                    }
                    label={
                      <Typography color={colors.grey[100]}>
                        {platform}
                      </Typography>
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box height="250px" mt="20px">
            <HomePieChart isDashboard={true} data={barData} />
          </Box>
        </Box>
      </div>
    );
  } else {
    return (
      <div
        id="rightContent"
        style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
      >
        <Topbar title="Home" subtitle="Customized home from Visiz" />
        <Box marginLeft="16px">
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
            color={colors.grey[100]}
          >
            Please select your video game genre, year, platform preference to
            view your customized home.
          </Typography>
        </Box>
      </div>
    );
  }
};

export default CustomizedHome;
