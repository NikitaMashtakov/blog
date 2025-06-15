import { useState } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Header, Footer } from './components';
const Content = styled.div`
  padding: 120px 0;
`;

function Blog() {
  return (
    <>
      <Header />{' '}
      <Content>
        <Outlet />
        <i className="fa fa-camera-retro"></i>
      </Content>
      <Footer />
    </>
  );
}

export default Blog;
