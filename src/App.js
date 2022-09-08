import './App.css';
// import Hero from "./components/home/Hero";
// import News from "./components/news/News";
import NewsView from "./components/news/NewsView";

import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />  
      <NewsView />

    </div>
  );
}

export default App;
