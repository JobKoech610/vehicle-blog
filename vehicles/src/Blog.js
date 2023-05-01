
import { useState, useEffect } from "react";

const Blog = () => {

    const[blog, setBlog]=useState("")
    console.log(blog);

    useEffect(()=>{
        fetch('http://localhost:3000/vehicles')
        .then(res=>res.json())
        .then(blogs=>{
            setBlog(blogs)
        })
    },[])

//   const blogItems =  blog.map((b)=> b.Model )
    
    return (  
        <div>
        
                   {blog.map((b)=>(
                    <div className="" key={b.id}>
        
                    </div>
                   ))}
                </div>
    );
}
 
export default Blog;