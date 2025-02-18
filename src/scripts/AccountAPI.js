import axios from "axios";

export default class AccountAPI {
    constructor() {
        // TODO: change it to an appropriate address or addres getting function
        this.API = axios.create({
            baseURL: 'https://api.ghostvwork.freemyip.com/Home'
        });
        this.API.interceptors.request.use((req) => {
            const token = localStorage.getItem("token");
            if (token) req.headers.Authorization = `Bearer ${token}`;
            return req;
        });
    }

    async getProfile() {
        try {
            const response = await this.API.get('/Profile');
            return response.data;
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong!");
        }
    }

}