import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/topbar";
import { Routes, Route } from "react-router-dom";
import CusSidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geomap from "./scenes/geomap";
import Login from "./scenes/login/index";
import Register from "./scenes/register/index";
import Profile from "./scenes/profile";
import { useState, useEffect } from "react";

function App() {
  const [theme, colorMode] = useMode();
  let pathName = window.location.pathname;
  let arr = pathName.toString().split("/");
  let currentPath = arr[arr.length - 1];
  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const data = await (
  //       await fetch(
  //         "http:localhost"
  //       )
  //     ).json();
  //     console.log(data);
  //   };

  //   dataFetch();
  // }, []);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {currentPath !== "login" && currentPath !== "register" ? (
            <CusSidebar />
          ) : undefined}
          <main className="content">
            {/* <Topbar /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geomap />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
