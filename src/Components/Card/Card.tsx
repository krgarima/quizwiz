import React, { useContext } from "react";
import { CategoryContext, SearchContext } from "../../Context/index";
import { Link } from "react-router-dom";
import { categories, CategoriesObjType } from "../../backend/db/categories";
import "./Card.css";

export default function Card() {
  const { setCategory } = useContext(CategoryContext);
  const { searchList } = useContext(SearchContext);
  return (
    <div className="card-container">
      {(searchList.length > 0 ? searchList : categories).map(
        (cat: CategoriesObjType) => (
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
            <button
              className="btn-playNow"
              onClick={() => setCategory(cat.code)}
            >
              <Link to="/rules">Play now</Link>
            </button>
          </div>
        )
      )}
    </div>
  );
}
