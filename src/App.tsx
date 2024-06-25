import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { publicRoutes, routesConfig } from "./constants/data";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./redux-store/auth/authSlice";
import PrivateRoutes from "./services/utils/PrivateRoute";

function App() {
  const token = useSelector(selectCurrentToken);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {routesConfig.map(({ path, element }) => (
            path === "/login" && token ? (
              <Route key={path} path={path} element={<Navigate to="/dashboard" />} />
            ) : (
              <Route
                key={path}
                element={<PrivateRoutes />}
              >
                <Route path={path} element={element} />
              </Route>
            )
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
