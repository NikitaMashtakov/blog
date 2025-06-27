// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import Blog from './Blog.jsx';
import { MainPage, AuthPage, RegistrationPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { UsersPage } from './pages/UsersPage/UsersPage.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Blog />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="post" element={<div>New Post</div>} />
          <Route path="post/:post_id" element={<div>Post</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,

  // </StrictMode>,
);
