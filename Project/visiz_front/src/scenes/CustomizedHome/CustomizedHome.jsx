import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { data } from "../../data/genre";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import SportsMmaOutlinedIcon from "@mui/icons-material/SportsMmaOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import Header from "../../components/Header";
import HomeLineChart from "../../components/HomeLineChart";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { data as lineData } from "../../data/lineData";

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
  const [tableYear, setTableYear] = React.useState(yearValue[0]);
  const [tablePlatform, setTablePlatform] = React.useState(platformValue[0]);
  const [tableGenre, setTableGenre] = React.useState(genreValue[0]);
  const [lineChartData1, setLineChart1] = React.useState(lineData);
  const [lineChartData2, setLineChart2] = React.useState(lineData);


  const handleSlideChange = (event, newValue) => {
    setSlideValue(newValue);
    console.log(newValue);
    var temp = lineData;
    for (let i = 0; i < data.length; i++) {
      temp[i].data.filter(obj => obj.x >= newValue[0] && obj.x <= newValue[1]);
    }
    setLineChart1(temp);
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
  //   React.useEffect(() => {
  //     if (preferenceComplete) {
  //       fetch(
  //         "http://localhost:8080/game/genreCount?genres=genreValue"
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log("data", data);
  //           console.log("data.data", data.data);
  //           if (data.status === 200) {
  //             setGenreCount(data.data);
  //           }
  //         })
  //         .catch((e) => {
  //           console.log("Error:", e);
  //           alert(e);
  //         });
  //     }
  //   }, []);

  // get pie data
  React.useEffect(() => {
    if (preferenceComplete) {
      setBarData([
        {
          id: "Action",
          label: "Action",
          value: 3316,
          //   "color": "hsl(336, 70%, 50%)"
        },
        {
          id: "Sports",
          label: "Sports",
          value: 2346,
          //   "color": "hsl(222, 70%, 50%)"
        },
        {
          id: "Misc",
          label: "Misc",
          value: 1739,
          //   "color": "hsl(120, 70%, 50%)"
        },
        {
          id: "Role_Playing",
          label: "Role_Playing",
          value: 1488,
          //   "color": "hsl(223, 70%, 50%)"
        },
      ]);
    }
  });
  //   React.useEffect(() => {
  //     if (preferenceComplete) {
  //       fetch(
  //         "http://localhost:8080/game/showPlatformGenreProportion?platform=" +
  //           piePlatform +
  //           "&year=" +
  //           pieYear
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log("data", data);
  //           console.log("data.data", data.data);
  //           if (data.state === 200) {
  //             setBarData(data.data);
  //           }
  //         })
  //         .catch((e) => {
  //           console.log("Error:", e);
  //           alert(e);
  //         });
  //     }
  //   }, []);

  const handlePieChartYearChange = (event) => {
    setPieYear(event.target.value);
    // fetch(
    //   "http://localhost:8080/game/showPlatformGenreProportion?platform=" +
    //     piePlatform +
    //     "&year=" +
    //     event.target.value
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     console.log("data.data", data.data);
    //     if (data.state === 200) {
    //       setBarData(data.data);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("Error:", e);
    //     alert(e);
    //   });
  };

  const handlePieChartPlatformChange = (event) => {
    setPiePlatform(event.target.value);
    // fetch(
    //   "http://localhost:8080/game/showPlatformGenreProportion?platform=" +
    //     event.target.value +
    //     "&year=" +
    //     pieYear
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     console.log("data.data", data.data);
    //     if (data.state === 200) {
    //       setBarData(data.data);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("Error:", e);
    //     alert(e);
    //   });
  };

  const handleTableYearChange = (event) => {
    setTableYear(event.target.value);
    console.log(
      "http://localhost:8080/game/showTop10?genre=" +
        tableGenre +
        "&platform=" +
        tablePlatform +
        "&year" +
        event.target.value
    );
    // fetch(
    // "http://localhost:8080/game/showTop10?genre=" +
    // tableGenre +
    // "&platform=" +
    // tablePlatform +
    // "&year" +
    // event.target.value
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     console.log("data.data", data.data);
    //     if (data.status === 200) {
    //       setTopVgSales(data.data);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("Error:", e);
    //     alert(e);
    //   });
  };

  const handleTableGenreChange = (event) => {
    setTableGenre(event.target.value);
    console.log(
      "http://localhost:8080/game/showTop10?genre=" +
        event.target.value +
        "&platform=" +
        tablePlatform +
        "&year" +
        tableYear
    );
    // fetch(
    // "http://localhost:8080/game/showTop10?genre=" +
    // event.target.value +
    // "&platform=" +
    // tablePlatform +
    // "&year" +
    // tableYear
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     console.log("data.data", data.data);
    //     if (data.status === 200) {
    //       setTopVgSales(data.data);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("Error:", e);
    //     alert(e);
    //   });
  };

  const handleTablePlatformChange = (event) => {
    setTablePlatform(event.target.value);
    console.log(
      "http://localhost:8080/game/showTop10?genre=" +
        tableGenre +
        "&platform=" +
        event.target.value +
        "&year" +
        tableYear
    );
    // fetch(
    // "http://localhost:8080/game/showTop10?genre=" +
    // tableGenre +
    // "&platform=" +
    // event.target.value +
    // "&year" +
    // tableYear
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     console.log("data.data", data.data);
    //     if (data.status === 200) {
    //       setTopVgSales(data.data);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("Error:", e);
    //     alert(e);
    //   });
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
                key={data.genre}
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
          <div style={{ display: "flex", alignContent: "space-between" }}>
            <Box sx={{ width: "30%", margin: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select year from your preference
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tableYear}
                  label="Select year from your preference"
                  onChange={handleTableYearChange}
                  sx={{
                    height: "2.5rem",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  {yearValue.map((year) => (
                    <MenuItem key={year} color="white" value={year}>
                      <Typography color={colors.grey[100]}>{year}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "30%", margin: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select platform from your preference
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tablePlatform}
                  label="Select year from your preference"
                  onChange={handleTablePlatformChange}
                  sx={{
                    height: "2.5rem",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  {platformValue.map((platform) => (
                    <MenuItem key={platform} color="white" value={platform}>
                      <Typography color={colors.grey[100]}>
                        {platform}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "30%", margin: "10px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select genre from your preference
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tableGenre}
                  label="Select year from your preference"
                  onChange={handleTableGenreChange}
                  sx={{
                    height: "2.5rem",
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  {genreValue.map((genre) => (
                    <MenuItem key={genre} color="white" value={genre}>
                      <Typography color={colors.grey[100]}>{genre}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <HomeTable data={topVgSales} />
          <Box sx={{}}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mt: 2, width: "80%" }}
              display="flex"
              alignItems="center"
            >
              <Typography color={colors.grey[100]}>1990</Typography>
              <Slider
                style={{ color: colors.blueAccent[200] }}
                value={slideValue}
                onChange={handleSlideChange}
                step={1}
                marks
                min={1990}
                max={2022}
                valueLabelDisplay="auto"
              />
              <Typography color={colors.grey[100]}>2020</Typography>
            </Stack>
          </Box>
          <div
            style={{
              marginTop: "0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box width="50%" height="250px" mt="20px">
              <HomeLineChart isDashboard={false} data={lineChartData1}/>
            </Box>
            <Box width="50%" height="250px" mt="20px">
              <HomeLineChart isDashboard={false}  data={lineChartData2}/>
            </Box>
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: "10px" }}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <Typography color={colors.grey[100]}>
                    Select Year from your preference
                  </Typography>
                </FormLabel>
                <RadioGroup
                  row
                  name="row-radio-buttons-group"
                  onChange={handlePieChartYearChange}
                  value={pieYear}
                >
                  {yearValue.map((year) => (
                    <FormControlLabel
                      key={year}
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
                  name="row-radio-buttons-group"
                  onChange={handlePieChartPlatformChange}
                  value={piePlatform}
                >
                  {platformValue.map((platform) => (
                    <FormControlLabel
                      key={platform}
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
          </div>
          <Box height="250px" mt="5px">
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
