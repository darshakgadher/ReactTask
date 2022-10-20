import React from "react";
import { Route, Routes, BrowserRouter as Routers } from "react-router-dom";
import Header from "../../pages/Header";
import routes from "./routeArray";

const Router = () => {
  return (
    <>
      <Routers>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route
              path={path}
              key={path}
              element={
                <>
                  <Header />
                  <Component />
                </>
              }
            />
          ))}
        </Routes>
      </Routers>
    </>
  );
};

export default Router;
