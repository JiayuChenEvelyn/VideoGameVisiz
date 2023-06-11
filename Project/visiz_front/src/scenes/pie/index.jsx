import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from '../../components/PieChart';

const Pie = ({ isCollapsed }) => {
  return (
    <div id="rightContent" style={isCollapsed?{ marginLeft: "80px" }:{ marginLeft: "250px" }}>
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
    </div>
  );
};

export default Pie;