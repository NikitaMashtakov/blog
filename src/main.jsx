// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import Blog from './Blog.jsx';
import { MainPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blog />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<div>Login</div>} />
        <Route path="register" element={<div>Register</div>} />
        <Route path="users" element={<div>Users</div>} />
        <Route path="post" element={<div>New Post</div>} />
        <Route path="post/:post_id" element={<div>Post</div>} />
        <Route path="*" element={<div>Error</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,

  // </StrictMode>,
);
