
import { Link } from "react-router-dom"

// const NavBar = () => {
 
//     return ( 
        
// <nav> 
// <Link exact to="/">Home</Link>
// <Link  to="/Blog">Blog</Link>
// <Link  to="/NewBlog">NewBlog</Link> 
// </nav>
        
//      );
// }
 
// export default NavBar;

import React from 'react';


 const NavBar = () => {
    return ( 
      <>
        <div className="nav-link">
            <nav className="links">
            <Link className="link" to="/"  href="">Home</Link>
              <Link  className="link" to="/Blog" href="">Blog</Link>
                <Link  className="link" to="/NewBlog"  href="">NewBlog</Link>
                </nav>    
        </div>
        </>
     );
 }
  
 export default NavBar;
