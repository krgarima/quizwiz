import React, { useContext } from "react";
import { CategoryContext } from "../../Context/category-context";
import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import "./Card.css";

export default function Card() {
  const { setCategory } = useContext(CategoryContext);
  return (
    <div className="card-container">
      {categories.map((cat) => (
        <div key={Math.random()} className="card">
          <div className="background-Image">
            <img
              className="card-img"
              src="/assets/images/bg1.jpg"
              alt="photo1"
            />
          </div>
          <div className="heading-container">
            <h2 className="heading">{cat.categoryName}</h2>
          </div>
          <div className="description">
            <p>{cat.description}</p>
            <p>10 Questions</p>
          </div>
          <button className="btn-playNow" onClick={() => setCategory(cat.code)}>
            <Link to="/rules">Play now</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
