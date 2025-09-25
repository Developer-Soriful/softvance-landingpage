import axios from "axios";

const API_BASE_URL = "https://apitest.softvencefsd.xyz";

export const apiRequest = async (endpoint, data = null) => {
    const url = `${API_BASE_URL}${endpoint}`;

    try {
        const response = await axios({
            method: 'POST',
            url,
            data,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};