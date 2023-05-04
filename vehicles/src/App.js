import React, { useState } from "react";
import Blog from "./Blog";
import Home from "./Home";
import NewBlog from "./NewBlog";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(".light");
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  
  const themeClass = isDarkMode ? "light" : "dark";
  return (
    <div className={`App ${themeClass}`}>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Dark mode" : "Light mode"}
      </button>

      <Router>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/NewBlog" element={<NewBlog />} />
          <Route path="/blog" element={<viewBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
