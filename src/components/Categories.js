import React, { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
    axios.get(`https://jservice.io/api/categories?count=4`).then((res) => {
      const responseCategories = res.data;
      setCategories(responseCategories);
    });
  }, []);

  console.log(categories);
  
  return(
    <div>
        <h1>Categories</h1>
        {categories &&
        categories.map((todo) => {
          const { id, title, clues_count } = todo;
          return (
            <div key={id}>
              <h5> {title} </h5>
              <h6> category id:{id} </h6>
              <h6> clues count: {clues_count} </h6>
            </div>
          );
        })}
    </div>
  );
};

export default Categories;