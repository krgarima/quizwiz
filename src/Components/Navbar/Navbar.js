import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, SearchContext } from "../../Context/index";
import { categories } from "../../backend/db/categories";
import "./Navbar.css";

export default function NavBar() {
  const { logged } = useContext(AuthContext);
  const { setSearchList } = useContext(SearchContext);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    const newList = categories.filter((product) =>
      product.categoryName.toLowerCase().includes(e.target.value)
    );
    setSearchList(newList);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const newList = categories.filter((product) =>
      product.categoryName.toLowerCase().includes(search)
    );
    setSearchList(newList);
  };

  return (
    <div className="navbar">
      <h3 className="third-heading company-logo">
        <Link to="/">Quizwiz</Link>
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
        <div className="icon-Badge center">
          <Link to="/">
            <i className="far fa-heart"></i>
          </Link>
        </div>

        <button className="log">
          {!logged ? (
            <Link to="/login">Log In</Link>
          ) : (
            <Link to="/login">Log Out</Link>
          )}
        </button>

        <button className="log">
          <Link to="/">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}
