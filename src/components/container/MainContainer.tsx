import { routes } from "constants/routes";
import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
export const MainContainer: FC = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </>
  );
};
