import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  console.log(blog);

  useEffect(() => {
    fetch("http://localhost:3000/vehicles")
      .then((res) => res.json())
      .then((blogs) => {
        setBlog(blogs);
      });
  }, []);
  //search
  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();
    if (search === "") {
      fetch("http://localhost:3000/vehicles")
        .then((res) => res.json())
        .then((blogs) => {
          setBlog(blogs);
        });
    } else {
      const filteredNames = blog.filter((blog) =>
        blog.Make.toLowerCase().includes(search)
      );
      setBlog(filteredNames);
    }
  };

  return (
    <div>
      <NavBar />

      <input
        type="search"
        onChange={(e) => filterNames(e)}
        placeholder="search-blog"
      />

      {blog.map((b) => (
        <div className="blog-preview" key={b.id}>
          <h2>{b.Model}</h2>
          <h2>{b.Make}</h2>
          <p>{b.Info}</p>
          <img src={b.Image} alt="car" />
        </div>
      ))}
    </div>
  );
};

export default Blog;
