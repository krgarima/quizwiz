import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Quiz, Result, Rules, NavBar, Footer } from "./index";

function App() {
  return (
    <div className="App">
      <NavBar />

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
