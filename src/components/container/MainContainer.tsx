import React, { FC } from "react";
import { Switch } from "react-router-dom";
import { routes } from "../../constants/routes";
import GuardRoute from "./Guard";
export const MainContainer: FC = () => {
  const allRoutes = routes.map((route, index: number) => {
    const Component = route.component as React.ComponentType;
    return Component ? (
      <GuardRoute
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ) : null;
  });
  return (
    <>
      <Switch>{allRoutes}</Switch>
    </>
  );
};
