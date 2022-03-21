import Profile from "pages/Profile/Profile";
import ProfileDetails from "pages/ProfileDetails/ProfileDetails";
import Success from "pages/Success/Success";

export const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/success",
    name: "ApplicationSuccess",
    component: Success,
  },
  {
    path: "/view/:id",
    name: "ProfileDetails",
    component: ProfileDetails,
  },
];
