import styled from 'styled-components';

const LargeText = styled.div`
  font-
`;

const LogoContainer = ({ className }) => {
  return (
    <div className={className}>
      <i className="fa fa-code" aria-hidden="true" />
      <div className="text"></div>
    </div>
  );
};

export const Logo = styled(LogoContainer)`
  font-size: 70px;
`;
