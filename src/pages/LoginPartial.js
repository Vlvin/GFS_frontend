import AccountAPI from "../scripts/AccountAPI";
import { useEffect, useState } from "react";
import AuthAPI from "../scripts/AuthAPI";
import { useNavigate } from "react-router";

export default function LoginPartial() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const refreshToken = () => {
        setToken(localStorage.getItem("token"));
    }
    useEffect(() => {
        const loadData = async () => {
            if (!token) return;
            const profile = await new AccountAPI().getProfile();
            refreshToken();
            setUserData(profile.data);

        };

        // Call the function 
        loadData();
    }, [token]);
    const onLogout = () => {
        new AuthAPI().logout();
        refreshToken();
        navigate("/");
    }
    return (
        token ? (
            <>
                <li className="nav-item">
                    <span className="nav-link disabled">{userData?.username}  <span className="sr-only">(current)</span></span>
                </li>
                <li className="nav-item">
                    <span className="nav-link disabled">{userData?.email}  <span className="sr-only">(current)</span></span>
                </li>
                <li className="nav-item active">
                    <button className="nav-link btn btn-danger" onClick={onLogout}>Logout <span className="sr-only">(current)</span></button>
                </li>
            </>
        ) : (
            <>
                <li className="nav-item active">
                    <a className="nav-link" href="/login">Login  <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/register">Register  <span className="sr-only">(current)</span></a>
                </li>
            </>
        )
    );
}
