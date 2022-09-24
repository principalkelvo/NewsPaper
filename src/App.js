import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/home/Hero";
import News from "./components/news/News";
import NewsView from "./components/news/NewsView";
import Categories from "./components/news/Category";
import Form from "./components/forms/Form";

import Navbar from "./components/navbar/Navbar";

function App() {
  //states
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState([]);

  //get all blogs
  useEffect(() => {
    fetch("http://localhost:9292/blogs")
      .then((r) => r.json())
      .then((blogs) => setBlogs(blogs));
      console.log('mount once');

  }, []);
  //get all categories
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((categories) => setCategories(categories));
  }, []);

  //add blog
  function handleAddBlog(newBlog) {
    setBlogs([...blogs, newBlog]);
  }

  // console.log("all blogs", blogs);

  return (
    <div className="App">
      <Navbar
        search={search}
        onSearchChange={setSearch}
        categories={categories}
      />
      {/* <Form onAddBlog={handleAddBlog}/> */}
      <Routes>
        <Route
          exact
          path="/"
          element={blogs.length > 1 ? <Hero blogs={blogs} /> : null}
        />
        <Route exact path="/buying" element={<News blogs={blogs} />} />
        <Route exact path="/blogs/:id" element={<NewsView blogs={blogs} />} />
        <Route
          exact
          path="/categories/:category"
          element={
              <Categories/>
          }
        />
        <Route
          exact
          path="/addBlogs"
          element={<Form onAddBlog={handleAddBlog} />}
        />
      </Routes>
    </div>
  );
}

export default App;
