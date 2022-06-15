import "./App.css";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Quiz, Result, Rules, NavBar, Footer, Login } from "./index";
import { AuthContext } from "./Context";

const App: React.FC = () => {
  const { setLogged } = useContext<any>(AuthContext);
  let encodedToken = localStorage.getItem("token");

  useEffect(() => {
    if (encodedToken) setLogged(true);
  }, [encodedToken, setLogged]);

  return (
    <div className="App">
      <NavBar />

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={encodedToken ? <Quiz /> : <Login />} />
          <Route
            path="/result"
            element={encodedToken ? <Result /> : <Login />}
          />
          <Route path="/rules" element={encodedToken ? <Rules /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--background-color)",
                }}
              >
                <p className="error404">404 Page Not Found!</p>
                <p className="error404-msg">
                  Oops!! Looks like you have entered a wrong URL
                </p>
              </main>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
