import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import GamesOutlinedIcon from "@mui/icons-material/GamesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BatchPredictionOutlinedIcon from '@mui/icons-material/BatchPredictionOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import "./index.css";
import { Outlet } from "react-router-dom";


const CusSidebar = ({ title, subtitle, isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const tagValue = JSON.parse(localStorage.getItem("tag")) || [];
  const username = localStorage.getItem("username") || '';

  return (
    <>
      <Sidebar
        id="aside"
        collapsed={isCollapsed}
        backgroundColor={color.primary[400]}
      >
        <Menu
          className="menu"
          iconShape="square"
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              return {
                color: active ? "#6870fa" : color.grey[100],
                backgroundColor: color.primary[400],
                "&:hover": {
                  backgroundColor: color.primary[400],
                  color: theme.palette.mode === "light" ? "#868dfb" : "#868dfb",
                },
              };
            },
          }}
        >
          <MenuItem
            onClick={() => {
              if (isCollapsed) {
                document.getElementById("aside").nextSibling.style.marginLeft =
                  "250px";
              } else {
                document.getElementById("aside").nextSibling.style.marginLeft =
                  "80px";
              }
              setIsCollapsed(!isCollapsed);
            }}
            icon={isCollapsed ? <MenuIcon /> : <MenuIcon />}
          >
            <Box display="flex" color={color.primary[100]}>
              <Typography variant="h4" color={color.primary[100]}>
                GameViz
              </Typography>
            </Box>
          </MenuItem>

          {!isCollapsed && (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
              mb="15px"
            >
              <IconButton>
                <PersonOutlineIcon sx={{ fontSize: "60px" }} />
              </IconButton>
              <Typography
                variant="h4"
                fontWeight="bold"
                marginBottom="10px"
                color={color.grey[100]}
              >
                {username}
              </Typography>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                {tagValue.map((tag, i) => (
                  <Box
                    key={i}
                    sx={{
                      padding: "3px",
                      borderRadius: "5px",
                      textAlign: "center",
                      height: "100%",
                      margin: "3px",
                      backgroundColor: color.grey[900],
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color={
                        i % 2 === 0
                          ? color.greenAccent[200]
                          : color.redAccent[200]
                      }
                    >
                      {tag}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
          <MenuItem
            icon={<FavoriteBorderOutlinedIcon />}
            active={selected === "preference"}
            onClick={() => setSelected("preference")}
            component={<Link to="/preference" />}
          >
            Preferences
          </MenuItem>
          <MenuItem
            icon={<HomeOutlinedIcon />}
            active={selected === "customizedHome"}
            onClick={() => setSelected("customizedHome")}
            component={<Link to="/customizedHome" />}
          >
            Customized home
          </MenuItem>
          <MenuItem
            icon={<DashboardOutlinedIcon />}
            active={selected === "dashboard"}
            onClick={() => setSelected("dashboard")}
            component={<Link to="/dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<RecommendOutlinedIcon />}
            active={selected === "recommend"}
            onClick={() => setSelected("recommend")}
            component={<Link to="/recommend" />}
          >
            Recommendation
          </MenuItem>
          <MenuItem
            icon={<BatchPredictionOutlinedIcon />}
            active={selected === "predict"}
            onClick={() => setSelected("predict")}
            component={<Link to="/predict" />}
          >
            Prediction
          </MenuItem>
          <SubMenu
            active={
              selected === "DS" ||
              selected === "PS2" ||
              selected === "PS3" ||
              selected === "Wii" ||
              selected === "X360" ||
              selected === "PSP" ||
              selected === "PS" ||
              selected === "PC"
            }
            icon={<SportsEsportsOutlinedIcon />}
            label="Platform"
          >
            <MenuItem
              onClick={() => setSelected("DS")}
              active={selected === "DS"}
              component={<Link to="/platform?p=DS" />}
            >
              {" "}
              DS
            </MenuItem>
            <MenuItem
              active={selected === "PS2"}
              onClick={() => setSelected("PS2")}
              component={<Link to="/platform?p=PS2" />}
            >
              {" "}
              PS2
            </MenuItem>
            <MenuItem
              active={selected === "PS3"}
              onClick={() => setSelected("PS3")}
              component={<Link to="/platform?p=PS3" />}
            >
              {" "}
              PS3
            </MenuItem>
            <MenuItem
              active={selected === "Wii"}
              onClick={() => setSelected("Wii")}
              component={<Link to="/platform?p=Wii" />}
            >
              {" "}
              Wii
            </MenuItem>
            <MenuItem
              active={selected === "X360"}
              onClick={() => setSelected("X360")}
              component={<Link to="/platform?p=X360" />}
            >
              {" "}
              X360
            </MenuItem>
            <MenuItem
              active={selected === "PSP"}
              onClick={() => setSelected("PSP")}
              component={<Link to="/platform?p=PSP" />}
            >
              {" "}
              PSP
            </MenuItem>
            <MenuItem
              active={selected === "PC"}
              onClick={() => setSelected("PC")}
              component={<Link to="/platform?p=PC" />}
            >
              {" "}
              PC
            </MenuItem>
          </SubMenu>
          <SubMenu
            active={
              selected === "Action" ||
              selected === "Fighting" ||
              selected === "Misc" ||
              selected === "Puzzle" ||
              selected === "Role_Playing" ||
              selected === "Shooter" || 
              selected === "Adventure" || 
              selected === "Simulation" || 
              selected === "Platform" || 
              selected === "Racing"  
            }
            icon={<GamesOutlinedIcon />}
            label="Genre"
          >
            <MenuItem
              active={selected === "Action"}
              onClick={() => setSelected("Action")}
              component={<Link to="/genre?g=Action" />}
            >
              {" "}
              Action
            </MenuItem>
            <MenuItem
              active={selected === "Adventure"}
              onClick={() => setSelected("Adventure")}
              component={<Link to="/genre?g=Adventure" />}
            >
              {" "}
              Adventure
            </MenuItem>
            <MenuItem
              active={selected === "Fighting"}
              onClick={() => setSelected("Fighting")}
              component={<Link to="/genre?g=Fighting" />}
            >
              {" "}
              Fighting
            </MenuItem>
            <MenuItem
              active={selected === "Misc"}
              onClick={() => setSelected("Misc")}
              component={<Link to="/genre?g=Misc" />}
            >
              {" "}
              Misc
            </MenuItem>
            <MenuItem
              active={selected === "Platform"}
              onClick={() => setSelected("Platform")}
              component={<Link to="/genre?g=Platform" />}
            >
              {" "}
              Platform
            </MenuItem>
            <MenuItem
              active={selected === "Puzzle"}
              onClick={() => setSelected("Puzzle")}
              component={<Link to="/genre?g=Puzzle" />}
            >
              {" "}
              Puzzle
            </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<KeyboardOutlinedIcon />}
            active={selected === "steam"}
            onClick={() => setSelected("steam")}
            component={<Link to="/steam" />}
          >
            Steam
          </MenuItem>
        </Menu>
      </Sidebar>
      <Outlet />
    </>
  );
};

export default CusSidebar;
