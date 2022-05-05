import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import { routes } from "./configs/routes";
import MainLayout from "./layouts/MainLayout";

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.component}
                caseSensitive={route.exact}
              />
            ))}
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
