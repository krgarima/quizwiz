import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";
import "./Login.css";

export const Login = () => {
  const {
    userName,
    setUserName,
    password,
    setPassword,
    setLogged,
    rememberPassword,
    setRememberPassword,
  }: any = useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (userName === "garry734" &&
        password === "^&734wurshfskjh7438473429w&%$") ||
      localStorage.getItem("123hdsa45dywe37382937c272")
    ) {
      localStorage.setItem("token", "123hdsa45dywe37382937c272");
      setLogged(true);
      if (!rememberPassword) {
        setUserName("");
        setPassword("");
      }
      navigate("/");
    } else {
      setError(true);
      setUserName("");
      setPassword("");
    }
  };

  const handleDummyData = (e: React.FormEvent) => {
    e.preventDefault();
    setUserName("garry734");
    setPassword("^&734wurshfskjh7438473429w&%$");
  };

  return (
    <div className="login center">
      <form className="login-Container">
        <h1 className="login-heading">Login</h1>
        <div className="login-contents">
          <label htmlFor="userNm" className="userNm">
            Username
          </label>
          <input
            type="text"
            className="userNm"
            id="userNm"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setError(false);
            }}
          />
          <br />
          <label htmlFor="userPswd" className="userPswd">
            Password
          </label>
          <input
            type="password"
            className="userPswd"
            id="userPswd"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
              readOnly
              checked={rememberPassword ? true : false}
              onClick={() => setRememberPassword(!rememberPassword)}
            />
            <label htmlFor="userAgreement">Remember me</label>
          </div>
          <br />
          <button
            className="login-btns createNewAccount-btn"
            onClick={handleCheck}
          >
            Login
          </button>
          <br />
          <button className="login-btns dummy-btn" onClick={handleDummyData}>
            Add Dummy Username and Password
          </button>

          {error && (
            <p className="error-auth">
              Error: Enter valid Username and Password!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
