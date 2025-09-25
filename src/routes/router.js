import { createBrowserRouter } from "react-router";
import App from "../App";
import Role from "../components/role/Role";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Otp from "../pages/auth/Otp";
import UserCrateSucc from "../components/UserCrateSucc";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "/user_role",
        Component: Role
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    },
    {
        path: "/otp",
        Component: Otp
    }
    ,
    {
        path: "/user_create_succ",
        Component: UserCrateSucc
    }
]);
