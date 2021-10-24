import { useRef } from "react";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Fellowship</h3>
          <span className="loginDesc">One place to connect them all.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              className="loginInput"
              type="email"
              required
              ref={email}
            />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
