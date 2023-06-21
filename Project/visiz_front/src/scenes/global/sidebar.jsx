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
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./index.css";
import { Outlet } from "react-router-dom";

const CusSidebar = ({ title, subtitle, isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const tagValue = JSON.parse(localStorage.getItem("tag")) || [];

  return (
    <>
      <Sidebar
        id="aside"
        collapsed={isCollapsed}
        backgroundColor={color.primary[400]}
      >
        <Menu
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
                Visiz
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
                USER NAME
              </Typography>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                {tagValue.map((tag, i) => (
                  <Box
                    sx={{
                      padding: "3px",
                      borderRadius: "5px",
                      width: "30%",
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
                        i % 2 == 0
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
          <SubMenu
            active={selected === "Steam" || selected === "platform2"}
            icon={<SportsEsportsOutlinedIcon />}
            label="Platform"
          >
            <MenuItem
              onClick={() => setSelected("Steam")}
              active={selected === "Steam"}
              component={<Link to="/platform?p=Steam" />}
            >
              {" "}
              Steam
            </MenuItem>
            <MenuItem
              active={selected === "platform2"}
              onClick={() => setSelected("platform2")}
              component={<Link to="/platform2" />}
            >
              {" "}
              platform 2
            </MenuItem>
          </SubMenu>
          <SubMenu
            active={selected === "genre1" || selected === "genre2"}
            icon={<GamesOutlinedIcon />}
            label="Genre"
          >
            <MenuItem
              active={selected === "genre1"}
              onClick={() => setSelected("genre1")}
              component={<Link to="/genre1" />}
            >
              {" "}
              genre 1
            </MenuItem>
            <MenuItem
              active={selected === "genre2"}
              onClick={() => setSelected("genre2")}
              component={<Link to="/genre2" />}
            >
              {" "}
              genre 2
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <Outlet />
    </>
  );
};

export default CusSidebar;
