import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = ({ isCollapsed }) => {
  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Box m="20px">
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <Box height="75vh">
          <BarChart />
        </Box>
      </Box>
    </div>
  );
};

export default Bar;
