import React, { useState, useEffect} from "react";
import Blog from "./Blog";
import Home from "./Home";
import NewBlog from "./NewBlog";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState('light');
 
  const themeClass = isDarkMode ? "light" : "dark";

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

useEffect(() => {
    document.body.className = themeClass;
     }, [themeClass]);
  return (
    <div className={`App ${themeClass}`}>
      <header>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Dark mode" : "Light mode"}
      </button>
      </header>

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

// import React, { useState, useEffect } from 'react';
// import './darkMode.css';
// function App() {
// const [theme, setTheme] = useState('light');
// const toggleTheme = () => {
// if (theme === 'light') {
// setTheme('dark');
// } else {
// setTheme('light');
// }
// };
// useEffect(() => {
// document.body.className = theme;
// }, [theme]);
// return (
//     <div className={`App ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }
// export default App;