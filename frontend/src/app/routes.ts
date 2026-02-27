import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./components/Landing";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { Waitlist } from "./components/Waitlist";
import { AdminDashboard } from "./components/AdminDashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "signup", Component: Signup },
      { path: "login", Component: Login },
      { path: "forgot-password", Component: ForgotPassword },
      { path: "reset-password/:token", Component: ResetPassword },
      { path: "waitlist", Component: Waitlist },
      {
        Component: ProtectedRoute,
        children: [
          { path: "admin", Component: AdminDashboard },
          { path: "dashboard", Component: AdminDashboard }, // Alias for after login
        ]
      }
    ],
  },
]);
