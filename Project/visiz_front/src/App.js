import * as React from "react";
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
import Platform from "./scenes/platform/platform.jsx";
import Game from "./scenes/game/game";
import ProtectedRoute from "./protectedRoute";
import Changepassword from "./scenes/changepassowrd/changepassword";
import Preference from "./scenes/Preference/preference";
import CustomizedHome from "./scenes/CustomizedHome/CustomizedHome"

function App() {
  console.log("app");
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  let pathName = window.location.pathname;
  let arr = pathName.toString().split("/");
  let currentPath = arr[arr.length - 1];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main id="content" className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/changepassword" element={<Changepassword />} />
              <Route
                element={
                  <ProtectedRoute>
                    <CusSidebar
                      isCollapsed={isCollapsed}
                      setIsCollapsed={setIsCollapsed}
                    />
                  </ProtectedRoute>
                }
              >
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/bar"
                  element={
                    <ProtectedRoute>
                      <Bar isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pie"
                  element={
                    <ProtectedRoute>
                      <Pie isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/line"
                  element={
                    <ProtectedRoute>
                      <Line isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/geography"
                  element={
                    <ProtectedRoute>
                      <Geomap isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/platform"
                  element={
                    <ProtectedRoute>
                      <Platform isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/game"
                  element={
                    <ProtectedRoute>
                      <Game isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/preference"
                  element={
                    <ProtectedRoute>
                      <Preference isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/customizedHome"
                  element={
                    <ProtectedRoute>
                      <CustomizedHome isCollapsed={isCollapsed} />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
