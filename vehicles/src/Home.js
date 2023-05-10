import React from 'react';
import NavBar from "./NavBar";
import { Link } from "react-router-dom"



// import { useState } from "react";

// import { Switch, Route } from "react-router-dom";


const Home = () => {
  // const [page, setPage] = useState("/");
  return (
    <>
<NavBar />
     <div className='heading'>


      <h1>All about cars!</h1>
      <p className='incite'> Discover new models and specifications.</p>
      <nav>
      <Link  className="link" to="/Blog"  href=""> View Blog</Link>
      </nav>
      </div>    
    </>
  );
};

export default Home;
