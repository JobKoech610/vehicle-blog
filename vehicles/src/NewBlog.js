import { useState } from "react";

import NavBar from "./NavBar";


const NewBlog = () => {

    const [Model, setModel] = useState('');
    const [Make, setMake] = useState('');
    const [Info, setInfo] = useState('');
    const [Image,  setImage] = useState('');

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

    fetch('http://localhost:3000/vehicles', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }
    return ( 

        <div className="create">
            <NavBar />
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Model:</label>
                <input type="text"  Value={Model} onChange={(e) => setModel(e.target.value)}/>
                <label>Make:</label>
                <input type="text" Value={Make} onChange={(e) => setMake(e.target.value)}/>
                <label>Image URL:</label>
                <input type="text" Value={Image} onChange={(e) => setImage(e.target.value)}/>
                <label>Specifications:</label>
                <input type="text" Value={Info} onChange={(e) => setInfo(e.target.value)}/>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default NewBlog;