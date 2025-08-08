import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Header, Footer } from './components';
import { Modal } from 'components/Modal/Modal';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.div`
  padding: 120px 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

function Blog() {
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
