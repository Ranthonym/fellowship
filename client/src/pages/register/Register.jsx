import { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordConfirm.current.value !== password.current.value) {
      passwordConfirm.current.setCustomValidity("Password fields do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
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
              placeholder="Username"
              className="loginInput"
              required
              ref={username}
            />
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
              minLength="6"
              required
              ref={password}
            />
            <input
              placeholder="Confirm Password"
              className="loginInput"
              type="password"
              minLength="6"
              required
              ref={passwordConfirm}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button className="loginRegisterButton">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
