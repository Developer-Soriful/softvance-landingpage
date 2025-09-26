import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const userData = localStorage.getItem("user");

        if (token && userData) {
            setUser(JSON.parse(userData));
        }
        setLoading(false); // ✅ loading complete
    }, []);

    // ✅ Login function
    const loginUser = async (email, password, remember_me = false) => {
        try {
            const response = await axios.post(
                "https://apitest.softvencefsd.xyz/api/login",
                { email, password, remember_me },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.data?.token) {
                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data));
                setUser(response.data);
                return response.data; // return for navigation
            }
            throw new Error("Login failed: Invalid response");
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    // ✅ Register function
    const registerUser = async (data) => {
        try {
            const response = await axios.post(
                "https://apitest.softvencefsd.xyz/api/register",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data) {
                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data));
                setUser(response.data);
                return response.data; // return for navigation
            }
            throw new Error("Registration failed: Invalid response");
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    // ✅ Logout function
    const logout = async (navigate) => {
        try {
            const token = localStorage.getItem("authToken");
            await axios.post(
                "https://apitest.softvencefsd.xyz/api/logout",
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            setUser(null);
            if (navigate) navigate("/login"); // optional redirect
        }
    };

    const value = {
        user,
        loading,
        loginUser,
        registerUser,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
