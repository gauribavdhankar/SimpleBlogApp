// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Create from './pages/Create';
import Update from './pages/Update';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';


const App = () => {
  return (
    <>
    <div className='container'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogform" element={<BlogForm />} />
        <Route path="/update/:postId" element={<Update />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
    </div>
    </>
  );
};

export default App;
