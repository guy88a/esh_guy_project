import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import './styles/main.css';

function App() {
  return (
    <div className='space'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog/:postId' element={<Post />}></Route>
      </Routes>
    </div>
  );
}

export default App;
