import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, SearchContext } from "../../Context/index";
import { categories } from "../../backend/db/categories";
import "./Navbar.css";

export default function NavBar() {
  const { setSearchList } = useContext(SearchContext);
  const [search, setSearch] = useState("");
  const { setLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  let encodedToken = localStorage.getItem("token");

  useEffect(() => {
    setLogged(true);
  }, [setLogged]);

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch((e.target as HTMLInputElement).value);
    const newList = categories.filter((product) =>
      product.categoryName
        .toLowerCase()
        .includes((e.target as HTMLInputElement).value)
    );
    setSearchList(newList);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newList = categories.filter((product) =>
      product.categoryName.toLowerCase().includes(search)
    );
    setSearchList(newList);
  };

  return (
    <div className="navbar">
      <h3 className="third-heading company-logo">
        <Link to="/">QuizWiz</Link>
      </h3>

      <div>
        <input
          className="search-input"
          placeholder="Search for books, music, films, cartoons"
          value={search}
          onChange={handleChange}
        />
        <i className="fas fa-search" onClick={handleSearch}></i>
      </div>

      <div className="navIcons">
        <button
          className="log"
          onClick={() => {
            if (encodedToken) {
              setLogged(false);
              localStorage.removeItem("token");
              navigate("/");
            } else {
              navigate("/login");
            }
          }}
        >
          {encodedToken ? "Log Out" : " Log In"}
        </button>

        {/* <button className="log">
          <Link to="/">Sign Up</Link>
        </button> */}
      </div>
    </div>
  );
}
