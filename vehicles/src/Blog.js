import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/vehicles")
      .then((res) => res.json())
      .then((blogs) => {
        // add a "likes" property to each blog post
        const blogsWithLikes = blogs.map((b) => ({
          ...b,
          likes: parseInt(localStorage.getItem(`likes-${b.id}`)) || 0,
        }));
        setBlog(blogsWithLikes);
      });
  }, []);

  const handleLike = (id) => {
    // find the blog post with the specified id
    const updatedBlog = blog.map((b) => {
      if (b.id === id) {
        // increment the likes for this post
        const updatedLikes = b.likes + 1;
        localStorage.setItem(`likes-${id}`, updatedLikes.toString());
        return { ...b, likes: updatedLikes };
      }
      return b;
    });
    setBlog(updatedBlog);
  };

  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();
    if (search === "") {
      fetch("http://localhost:3000/vehicles")
        .then((res) => res.json())
        .then((blogs) => {
          // add a "likes" property to each blog post
          const blogsWithLikes = blogs.map((b) => ({
            ...b,
            likes: parseInt(localStorage.getItem(`likes-${b.id}`)) || 0,
          }));
          setBlog(blogsWithLikes);
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
      <input className="search"
        type="search"
        onChange={(e) => filterNames(e)}
        placeholder="search-blog"
      />
      {blog.map((b) => (
        <div className="blog-preview" key={b.id}>
          <div className="blog"> 
          <h2>{b.Model}</h2>
          <h2>{b.Make}</h2>
          <div className="info"> 
          <p>{b.Info}</p>
          </div>
          <img src={b.Image} alt="car" className="pic" />
          </div>
          <button onClick={() => handleLike(b.id)}>Like ({b.likes})</button>
        <hr />
        </div>
      ))}
    </div>
  );
};

export default Blog;
