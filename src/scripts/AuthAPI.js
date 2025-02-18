import axios from "axios";

const API = axios.create({
    baseURL: 'https://api.ghostvwork.freemyip.com/Auth'
})
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export default class AuthAPI {
    constructor() {
        // TODO: change it to an appropriate address or addres getting function
        this._url = 'https://api.ghostvwork.freemyip.com/Auth';
    }
    async register(username, email, password) {
        try {
            const response = await API.post('/Register', JSON.stringify({
                username: username,
                email: email,
                password: password
            }));
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            // alert(error.response?.data?.message || "Something went wrong!");
        }
        // return token;
    }
    async login(email, password) {
        try {
            const response = await API.post('/Login', {
                email: email,
                password: password
            });
            if (response.status !== 200) {
                return false
            }
            console.log(response);
            const token = response.data.token;
            localStorage.setItem("token", token);
            return true
        } catch (error) {
            // alert(error.response?.data?.message || "Something went wrong!");
            return false
        }
    }
    async logout() {
        // cant revoke JWT so just remove it from storage
        localStorage.setItem("token", "");
    }

}