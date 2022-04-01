import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";

export default function Login() {
  const { userName, setUserName, password, setPassword } =
    useContext(AuthContext);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleCheck = (e) => {
    e.preventDefault();
    if (userName === "garry" && password === "123") navigate("/rules");
    else {
      setError(true);
      setUserName("");
      setPassword("");
    }
  };

  const handleDummyData = (e) => {
    e.preventDefault();
    setUserName("garry");
    setPassword("123");
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
            />
            <label htmlFor="userAgreement">Remember me</label>
            <Link to="/" rel="noopener noreferrer" className="forgotPswd">
              Forgot your password?
            </Link>
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
          <button className="login-btns toSignUpPage-btn">
            <Link to="/">Create New Account &gt;</Link>
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
}
