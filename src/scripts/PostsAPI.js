import axios from "axios";


class PostsAPIC {
    constructor() {
        // TODO: change it to an appropriate address or addres getting function
        this.API = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_URL}/Posts`
        })
        this.API.interceptors.request.use((req) => {
            const token = localStorage.getItem("token");
            if (token) req.headers.Authorization = `Bearer ${token}`;
            return req;
        });

    }
    async all() {
        const response = await this.API.get('/All');
        if (response.status !== 200) {
            alert("Something went wrong");
            return {
                success: false,
                data: response.data
            };
        }
        return {
            success: true,
            data: response.data
        };
    }
    async userPosts(id = "default") {
        const response = await this.API.get('/UserPosts', { params: { id: id } });
        if (response.status !== 200) {
            alert("Something went wrong");
            return {
                success: false,
                data: response.data
            };
        }
        return {
            success: true,
            data: response.data
        };
    }

    async myPosts() {
        const response = await this.API.get('/MyPosts');
        if (response.status !== 200) {
            alert("Something went wrong");
            return {
                success: false,
                data: response.data
            };
        }
        return {
            success: true,
            data: response.data
        };
    }

    async find(keyword = "") {
        const response = await this.API.get('/Search', { params: { keyword: keyword } });
        if (response.status !== 200) {
            alert("Something went wrong");
            return {
                success: false,
                data: response.data
            };
        }
        return {
            success: true,
            data: response.data
        };
    }
}

const PostsAPI = new PostsAPIC();
export default PostsAPI;

