// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import Blog from './Blog.jsx';
import { MainPage, AuthPage, RegistrationPage, UsersPage, PostPage } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store.js';
import ProtectedRoute from 'pages/ProtectedRoute/ProtectedRoute';
import { ROLE } from 'constants';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Blog />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route
            path="users"
            element={
              <ProtectedRoute roles={[ROLE.ADMIN]}>
                <UsersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="post"
            element={
              <ProtectedRoute roles={[ROLE.ADMIN]}>
                <PostPage />
              </ProtectedRoute>
            }
          />
          <Route path="post/:id" element={<PostPage />} />
          <Route
            path="post/:id/edit"
            element={
              <ProtectedRoute roles={[ROLE.ADMIN]}>
                <PostPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
);
