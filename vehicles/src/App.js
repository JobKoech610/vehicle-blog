import Blog from './Blog';
import Home from './Home';
import NewBlog from './NewBlog'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/NewBlog" element={<NewBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
