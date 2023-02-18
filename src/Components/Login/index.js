import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    const [userCred, setUserCred] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleCred = (value) => {
      return setUserCred((cred) => {
        return { ...cred, ...value };
      });
    };

    const handleLogin = async (event) => {
      try {
        event.preventDefault();
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/signin`,
          userCred,
          { withCredentials: true }
        );
        if (response) {
          navigate("/");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };
  return (
    <form action="#!" id="main" onSubmit={handleLogin}>
      <h2>Login to your account</h2>

      <div class="input-parent">
        <label for="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={userCred.email}
          placeholder="Enter email"
          onChange={(e) => handleCred({ email: e.target.value })}
        />
      </div>

      <div class="input-parent">
        <label for="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={userCred.password}
          placeholder="Password"
          onChange={(e) => handleCred({ password: e.target.value })}
        />
      </div>

      <button type="submit">Login</button>
      <div>
        <a href="/forgotPassword">Forgot password?</a>
      </div>
    </form>
  );
};

export default Login;



