import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = ({ isCollapsed }) => {
  return (
    <div id="rightContent" style={isCollapsed?{ marginLeft: "80px" }:{ marginLeft: "250px" }}>
      <Box m="20px">
        <Header title="Line Chart" subtitle="Simple LineChart Chart" />
        <Box height="75vh">
          <LineChart />
        </Box>
      </Box>
    </div>
  );
};

export default Line;
