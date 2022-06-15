import "./App.css";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Quiz, Result, Rules, NavBar, Footer, Login } from "./index";
import { AuthContext } from "./Context";

const App: React.FC = () => {
  const { logged, setLogged } = useContext<any>(AuthContext);

  useEffect(() => {
    setLogged(true);
  }, [setLogged]);

  return (
    <div className="App">
      <NavBar />

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={logged ? <Quiz /> : <Login />} />
          <Route path="/result" element={logged ? <Result /> : <Login />} />
          <Route path="/rules" element={logged ? <Rules /> : <Login />} />
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
