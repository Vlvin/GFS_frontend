import axios from "axios";
import AuthAPI from "./AuthAPI";

class AccountAPIC {
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
    async getProfile(id = "default") {
        try {
            const response = await this.API.get('/Profile', { params: { id: id } });
            if (response.status !== 200) {
                AuthAPI.logout();
                return {
                    success: false,
                    data: null
                }
            }
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong!");
            AuthAPI.logout();
            return {
                success: false,
                data: null
            }
        }
    }
    async getMyProfileData() {
        try {
            const response = await this.API.get('/Me');
            if (response.status !== 200) {
                AuthAPI.logout();
                return {
                    success: false,
                    data: null
                }
            }
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong!");
            AuthAPI.logout();
            return {
                success: false,
                data: null
            }
        }
    }

}

const AccountAPI = new AccountAPIC();
export default AccountAPI;
