import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geomap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geomap" subtitle="Simple Geomap" />
      <Box
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        height="75vh"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geomap;
