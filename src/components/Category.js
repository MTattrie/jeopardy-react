import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
    const [todos, setTodos] = useState();

    //console.log(categoryID);

    useEffect(() => {
    axios.get(`https://jservice.io/api/category?id=1892` ).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);

  return(
    <div>
        <h1>Category</h1>
        
    </div>
  );
};

export default Category;