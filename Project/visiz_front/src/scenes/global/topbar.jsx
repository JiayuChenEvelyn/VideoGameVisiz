import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Topbar = ({ title, subtitle }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const handleClickProfile = () => {
    navigate("/profile");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        <Header title={title} subtitle={subtitle} />
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={handleClickProfile}>
          <AccountCircleOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
