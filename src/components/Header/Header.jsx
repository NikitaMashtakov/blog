import styled from 'styled-components';
import { Logo } from '../../components';

export const HeaderContainer = ({ className }) => {
  return (
    <div className={className}>
      <Logo />
      <div>Header</div>
    </div>
  );
};

export const Header = styled(HeaderContainer)``;
