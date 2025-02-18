import AccountAPI from "../scripts/AccountAPI";
import { useEffect, useState } from "react";
import AuthAPI from "../scripts/AuthAPI";
import { useNavigate } from "react-router";

export default function LoginPartial() {
    const authorized = localStorage.getItem("token");
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const loadData = async () => { 
            if (authorized) {
                setUserData(await new AccountAPI().getProfile());
            }
        }; 
  
        // Call the function 
        loadData(); 
    }, [authorized]);
    const onLogout = () => {
        new AuthAPI().logout();
        navigate("/");
    }
    return (
        authorized ? (
            <>
                <li className="nav-item">
                    <span className="nav-link disabled">{userData?.username}  <span class="sr-only">(current)</span></span>
                </li>
                <li className="nav-item">
                    <span className="nav-link disabled">{userData?.email}  <span class="sr-only">(current)</span></span>
                </li>
                <li className="nav-item active">
                    <button className="nav-link btn btn-danger" onClick={onLogout}>Logout <span class="sr-only">(current)</span></button>
                </li>
            </>
        ) : (
            <>
                <li className="nav-item active">
                    <a className="nav-link"  href="/login">Login  <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link"  href="/register">Register  <span class="sr-only">(current)</span></a>
                </li>
            </>
        )
    );
}