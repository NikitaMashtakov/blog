import styled from 'styled-components';
import { Logo, ControlPanel } from '../../components';

const Description = styled.div`
  font-style: italic;
`;

export const HeaderContainer = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <Description>
        <p>
          Веб-технологии
          <br />
          Написание кода
          <br />
          Разбор ошибок
        </p>
      </Description>
      <ControlPanel />
    </header>
  );
};

export const Header = styled(HeaderContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: inherit;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0 -2px 17px #616161;
  background-color: #fff;
`;
