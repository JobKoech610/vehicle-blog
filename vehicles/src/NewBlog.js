import { useState } from "react";

import NavBar from "./NavBar";
import "./New.css";

const NewBlog = () => {
  const [Model, setModel] = useState("");
  const [Make, setMake] = useState("");
  const [Info, setInfo] = useState("");
  const [Image, setImage] = useState("");

  //  function handleChange(event) {
  //     setBlog({
  //       ...blog,
  //       [event.target.name]: event.target.defaultValue,
  //     });
  //     console.log(event.target)
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { Model, Make, Info, Image };

    if (window.confirm("Are you sure you want to add this blog?")) {
      fetch("http://localhost:3000/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog added");
      });
    }
  };

  return (
    <div className="create">
      <NavBar />

      <form onSubmit={handleSubmit}>
        <h3 id="logo">New Blog</h3>

        <label>Model:</label>
        <input
          type="text"
          Value={Model}
          onChange={(e) => setModel(e.target.value)}
          required
        />

        <label>Make:</label>
        <input
          type="text"
          Value={Make}
          onChange={(e) => setMake(e.target.value)}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          Value={Image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <label>Specifications:</label>
        <input
          type="text"
          Value={Info}
          onChange={(e) => setInfo(e.target.value)}
          required
        />

        <input type="submit" name="submit" value="Add-Blog" />
      </form>
    </div>
  );
};

export default NewBlog;
