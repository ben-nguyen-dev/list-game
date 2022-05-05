import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./configs/routes";
import Header from "./layouts/Header";

const App: FC = () => {
  return (
    <div className="App">
      <Header>
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Router>
      </Header>
    </div>
  );
};

export default App;
