import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h5>Select Category</h5>
      {categories.map((categoy) => (
        <p key={categoy.id} className="m-0">
          <Link className="text-decoration-none" to={`/category/${categoy.id}`}>
            {categoy.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
