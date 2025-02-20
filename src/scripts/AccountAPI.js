import axios from "axios";
import AuthAPI from "./AuthAPI";

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
    /* @return
     * object { authroized: bool, data: AxiosResponse.data }
    */
    async getProfile() {
        try {
            const response = await this.API.get('/Profile');
            if (response.status !== 200) {
                new AuthAPI().logout();
                return {
                    authorized: false,
                    data: null
                }
            }
            return {
                authorized: true,
                data: response.data
            };
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong!");
            new AuthAPI().logout();
            return {
                authorized: false,
                data: null
            }
        }
    }

}
