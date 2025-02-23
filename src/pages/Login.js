import { useState } from "react";
import AuthAPI from "../scripts/AuthAPI";
import { useNavigate } from "react-router";
import { checkPassword } from "./Register";

// const onLoginAttempt = async (email, password) => {
//   return await new AuthAPI().login(email, password);
// }

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = async () => {
    if (email === "" || password === "")
      return alert("please enter valid email and password");

    const success = checkPassword(password) && await AuthAPI.login(email, password);
    if (!success) {
      setWarningMessage("Invalid email or password");
      return;
    }
    navigate("/");
    window.location.reload();
    setEmail("");
    setPassword("");
  }
  return (
    <div className="container-liquid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-6 col-lg-4 loginForm">
          <form action={handleFormSubmit}>
            <div className="inputEmail form-group">
              <label>Email:</label>
              <input className="form-control" type="email" placeholder="mymail@example.com"
                value={email} onChange={handleEmailChange} required />
            </div>
            <div className="inputPassword form-group">
              <label>Password:</label>
              <input className="form-control" type="password" minLength={8}
                value={password} onChange={handlePasswordChange} required />
            </div>
            <div className={`warningMessage form-group ${warningMessage === "" ? "hidden" : ""}`}>
              <label className="text-danger">{warningMessage}</label>
            </div>
            <div className="submit">
              <input className="btn btn-success" type="submit" value="Sign In" />
            </div>
          </form>
          <label>Don't have an account? </label>
          <a href="/register"> Sign Up</a>
        </div>
      </div>
    </div>
  )
}
