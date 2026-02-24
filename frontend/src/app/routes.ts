import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./components/Landing";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Waitlist } from "./components/Waitlist";
import { AdminDashboard } from "./components/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "signup", Component: Signup },
      { path: "login", Component: Login },
      { path: "waitlist", Component: Waitlist },
      { path: "admin", Component: AdminDashboard },
    ],
  },
]);
