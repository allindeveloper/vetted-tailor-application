import Profile from "pages/Profile/Profile";
import ProfileDetails from "pages/ProfileDetails/ProfileDetails";
import Success from "pages/Success/Success";

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: Profile,
  },
  {
    path: "/success",
    exact: true,
    name: "ApplicationSuccess",
    component: Success,
  },
  {
    path: "/view/:id",
    exact: true,
    name: "ProfileDetails",
    component: ProfileDetails,
  },
];
