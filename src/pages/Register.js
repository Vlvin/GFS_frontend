import { useState } from "react";
import AuthAPI from "../scripts/AuthAPI";
import { useNavigate } from "react-router";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = async () => {
    if (username === "" || email === "" || password === "")
      return alert("please enter valid username, email and password");
    await AuthAPI.register(username, email, password);
    setUsername("");
    setEmail("");
    setPassword("");
    navigate("/");
    window.location.reload();
  }
  return (
    <div className="container-liquid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-6 col-lg-4 loginForm">
          <form action={handleFormSubmit}>
            <div className="inputUsername form-group">
              <label>Username:</label>
              <input className="form-control" type="text" placeholder="MyName" minLength={1}
                value={username} onChange={handleUsernameChange} required />
            </div>
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
            <div className="submit">
              <input className="btn btn-success" type="submit" value="Sign In" />
            </div>
          </form>
          <label>Already have an account? </label>
          <a href="/login"> Sign In</a>
        </div>
      </div>
    </div>
  )
}
