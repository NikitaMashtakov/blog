import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Header, Footer } from './components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'actions';
import { Modal } from 'components/Modal/Modal';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 120px 0;
  height: 100%;
`;

function Blog() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    if (userData) {
      dispatch(setUser(userData));
    }
  }, [dispatch]);

  return (
    <AppColumn>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Modal />
      <Footer />
    </AppColumn>
  );
}

export default Blog;
