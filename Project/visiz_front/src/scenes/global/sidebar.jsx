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
import "./index.css";

const CusSidebar = ({title, subtitle}) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar collapsed={isCollapsed} backgroundColor={color.primary[400]}>
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
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuIcon /> : <MenuIcon />}
        >
          <Box display="flex" color={color.primary[100]}>
            <Typography variant="h4">Visiz</Typography>
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
            <Box display="flex" width="100%" justifyContent="space-around">
              <Typography
                variant="h5"
                fontWeight="bold"
                backgroundColor={color.grey[900]}
                borderRadius="15%"
                pt="3px"
                pb="3px"
                pl="6px"
                pr="6px"
                color={color.greenAccent[200]}
              >
                TAG1
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                backgroundColor={color.grey[900]}
                borderRadius="15%"
                pt="3px"
                pb="3px"
                pl="6px"
                pr="6px"
                color={color.redAccent[200]}
              >
                TAG2
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                backgroundColor={color.grey[900]}
                borderRadius="15%"
                pt="3px"
                pb="3px"
                pl="6px"
                pr="6px"
                color={color.blueAccent[200]}
              >
                TAG3
              </Typography>
            </Box>
          </Box>
        )}

        <MenuItem
          icon={<DashboardOutlinedIcon />}
          active={selected === "dashboard"}
          onClick={() => setSelected("dashboard")}
          component={<Link to="/" />}
        >
          Dashboard
        </MenuItem>
        <SubMenu
          active={selected === "platform1" || selected === "platform2"}
          icon={<SportsEsportsOutlinedIcon />}
          label="Platform"
        >
          <MenuItem
            onClick={() => setSelected("platform1")}
            active={selected === "platform1"}
            component={<Link to="/platform1" />}
          >
            {" "}
            platform 1
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
  );
};

export default CusSidebar;
