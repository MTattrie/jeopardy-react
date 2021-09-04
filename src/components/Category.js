import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = (categoryId) => {
    const [categories, setCategories] = useState();

    console.log(categoryId);

    useEffect(() => {
    axios.get(`https://jservice.io/api/category?id=${categoryId.id}`).then((res) => {
      const responseCategories = res.data;
      setCategories(responseCategories.clues);
    });
  }, []);

  console.log(categories);
  


  return(
    <div>
        <h1>Categories</h1>
        {categories &&
        categories.map((todo) => {
          const { id, title, clues_count, question, answer, value, airdate, category_id, game_id, invalid_count } = todo;
          return (
            <div key={id}>
              <h5> {title} </h5>
              <h6> clue id:{id} </h6>
              <h6> clues count: {clues_count} </h6>
              <h6> question: {question} </h6>
              <h6> answer: {answer} </h6>
              <h6> value: {value} </h6>
              <h6> airdate: {airdate} </h6>
              <h6> category_id: {category_id} </h6>
              <h6> game_id: {game_id} </h6>
              {game_id == null && <h6> game_id: null</h6>}
              {invalid_count == null && <h6> invalid_count: null</h6>}
              <h6>-------------------------</h6>
            </div>
          );
        })}
    </div>
  );
};

export default Category;