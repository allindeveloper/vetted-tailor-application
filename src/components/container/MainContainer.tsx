import Profile from "pages/Profile/Profile";
import ProfileDetails from "pages/ProfileDetails/ProfileDetails";
import ApplicationSuccess from "pages/Success/Success";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../constants/routes";
import GuardRoute from "./Guard";
export const MainContainer: FC = () => {
  const menu = routes.map((route, index: number) => {
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
      <Switch>
        {menu}
        <Route path={"/"} exact render={() => <Profile />} />
        <Route path={"/success"} render={() => <ApplicationSuccess />} />

        <Route path={"/view/:id"} render={() => <ProfileDetails />} />
      </Switch>
    </>
  );
};
