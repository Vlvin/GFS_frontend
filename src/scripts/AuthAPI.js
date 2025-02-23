import axios from "axios";
class AuthAPIC {
    constructor() {

        this.API = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_URL}/Auth`
        })
        this.API.interceptors.request.use((req) => {
            const token = localStorage.getItem("token");
            if (token) req.headers.Authorization = `Bearer ${token}`;
            return req;
        });


        // TODO: change it to an appropriate address or addres getting function
    }
    async register(username, email, password) {
        try {
            const response = await this.API.post('/Register', {
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
            const response = await this.API.post('/Login', {
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
            const response = await this.API.get('/Authorize');
            if (response.status !== 200) {
                alert("Something went wrong");
                return false;
            }
            return response.data.authorized; // in cases when server is down
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
