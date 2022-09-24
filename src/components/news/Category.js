// import NewsCSS from "./News.module.css";
import React, { useState, useEffect } from "react";
import Hero from "../home/Hero";
import { useParams } from "react-router";

function Category() {
  const { category } = useParams();
  console.log("category", `http://localhost:9292/categories/${category}`);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  //get each category
//loads multiple times
  useEffect(() => {
    fetch(`http://localhost:9292/categories/${category}`)
      .then((r) => r.json())
      .then((categories) => setCategories(categories));

    console.log("mount once categories");
  }, [category]);

  //gets blogs for each category
  useEffect(() => {
    if (categories.blogs) {
      setBlogs(categories.blogs);
      console.log("mount once category blogs");
    }
  }, [categories.blogs]);

  console.log("categories: ", categories);
  console.log(typeof categories);
  console.log("setBlogs by categories: ", blogs);
  //not working perfectly you must check if blogs are more than one
  return <>{blogs.length > 1 ? <Hero blogs={blogs} /> : null}</>;
}
export default Category;
