import { useState } from "react";




const onLoginAttempt = (email, password) => {
  alert(`${email} ${password}`)
}

export default function Login() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const handlePasswordChange = (event) => {
     setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOnClick = () => {
    //event.preventDefault();
    if (email == "" || password == "")
      return alert("please enter valid email and password");
    onLoginAttempt(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="loginForm">
      <form action={handleOnClick}>
        <input id="emailInput" type="email" placeholder="mymail@example.com" 
                value={email} onChange={handleEmailChange} required/>
        <input id="passwordInput" type="password" minLength={8}
                value={password} onChange={handlePasswordChange} required/>
        <input id="submitButon" type="submit" value="Sign In"/>
      </form>
    </div>
  )
}
