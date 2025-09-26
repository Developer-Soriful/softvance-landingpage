import { createBrowserRouter } from "react-router";
import Role from "../components/role/Role";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Otp from "../pages/auth/Otp";
import UserCrateSucc from "../components/UserCrateSucc";
import ForgetPass from "../pages/auth/ForgetPass";
import OtpForget from "../pages/auth/OtpForget";
import App from "../App";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "../components/Profile";
import NewPass from "../pages/auth/NewPass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes><App /></ProtectedRoutes>
  },
  {
    path: "/user_role",
    element: <Role />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/otp",
    element: <Otp />
  },
  {
    path: "/user_create_succ",
    element: <UserCrateSucc />
  },
  {
    path: "/forget_pass",
    element: <ForgetPass />
  },
  {
    path: "/otp_forget",
    element: <OtpForget />
  }
  ,
  {
    path: "/profile",
    element: <Profile />
  }
  ,
  {
    path: "/new_pass",
    element: <NewPass />
  }
]);
