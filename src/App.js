import React, { useEffect, useState } from "react";
import './App.css';
// import Hero from "./components/home/Hero";
// import News from "./components/news/News";
// import NewsView from "./components/news/NewsView";
import Form from "./components/forms/Form"

import Navbar from "./components/navbar/Navbar";


function App() {
  //states
  const [blogs, setBlogs] = useState([])

  //get all blogs
  useEffect(() => {
    fetch("http://localhost:9292/blogs")
      .then((r) => r.json())
      .then((blogs) => setBlogs(blogs));
  }, []);


  return (
    <div className="App">
      <Navbar />  
      <Form />
    </div>
  );
}

export default App;
