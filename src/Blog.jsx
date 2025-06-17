import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Header, Footer } from './components';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 120px 0;
`;

function Blog() {
  return (
    <AppColumn>
      <Header />
      <Content>
        <Outlet />
        <i className="fa fa-camera-retro"></i>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default Blog;
