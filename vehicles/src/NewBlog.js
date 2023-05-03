import React, { useState } from "react";

import NavBar from "./NavBar";


const NewBlog = () => {

 const [blog,setBlog]=useState({
    Model:"",
    Make:"",
    Info:"",
    Image:""
 })

 function handleChange(event) {
    setBlog({
      ...blog,
      [event.target.name]: event.target.defaultValue,
    });
    console.log(event.target)
  }

    function handleSubmit(event){
        event.preventDefault();
        
        fetch('http://localhost:3000/vehicles',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Model:blog.Model,
                Make:blog.Make,
                Info:blog.Info,
                Image:blog.Image
            }
            )
        })

    }
    return ( 

        <div>
            <NavBar />
            <h1>Add Blog Here</h1>
            <form onSubmit={handleSubmit}>
                <label>Model<input type="text" name="model" defaultValue={blog.Model} onChange={handleChange}/></label>
                <label>Make<input type="text" name="make" defaultValue={blog.Make} onChange={handleChange}/></label>
                <label>Image URL<input type="text" name="image-url" defaultValue={blog.Image} onChange={handleChange}/></label>
                <label>Specifications<input type="text" name="specifications" defaultValue={blog.Info} onChange={handleChange}/></label>
                <button type="submit">Add Blog</button>
            </form>
        </div>
     );
}
 
export default NewBlog;