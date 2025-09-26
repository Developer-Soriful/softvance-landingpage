import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('user');

        if (token && userData) {
            setUser(JSON.parse(userData));
        }
        // ✅ loading false should always run after checking user
        setLoading(false);
    }, []);



    const logout = async (navigate) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.post(
                'https://apitest.softvencefsd.xyz/api/logout',
                {},
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            setUser(null);
            if (navigate) navigate("/login"); // ✅ optional redirect
        }
    };


    const value = {
        user,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider