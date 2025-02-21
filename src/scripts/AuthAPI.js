import axios from "axios";

const API = axios.create({
    baseURL: 'https://api.ghostvwork.freemyip.com/Auth'
})
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

class AuthAPIC {
    constructor() {
        // TODO: change it to an appropriate address or addres getting function
        this._url = 'https://api.ghostvwork.freemyip.com/Auth';
    }
    async register(username, email, password) {
        try {
            const response = await API.post('/Register', {
                username: username,
                email: email,
                password: password
            });
            if (response.status !== 200) {
                return false
            }
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            return false
        }
        return true
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
            const token = response.data.token;
            localStorage.setItem("token", token);
        } catch (error) {
            return false
        }
        return true
    }
    async authorize() {
        try {
            const response = await API.get('/Authorize');
            if (response.status == 401) {
                this.logout();
                return false;
            }
            else if (response.status == 200)
                return true;
            else return false; // in cases when server is down
        } catch {
            return false;
        }
    }
    async logout() {
        // cant revoke JWT so just remove it from storage
        localStorage.setItem("token", "");

    }

}

const AuthAPI = new AuthAPIC();
export default AuthAPI;
