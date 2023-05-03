import React from 'react';
import NavBar from "./NavBar";

// import { useState } from "react";

// import { Switch, Route } from "react-router-dom";

const Home = () => {
  // const [page, setPage] = useState("/");
  return (
    <div className="home">
<NavBar />
      <h1>All about cars!</h1>
      <p>Discover new models and specifications.</p>
      <button className="view-btn">view blog</button>
    </div>
  );
};

export default Home;
