import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment10-backend.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h5 className="text-black ms-2 mt-md-4">Select Category</h5>
      {categories.map((categoy) => (
        <p key={categoy.id} className="m-2">
          <Link className="text-decoration-none" to={`/course/${categoy.id}`}>
            <Button variant="secondary" className="w-75">
              {categoy.name}
            </Button>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
