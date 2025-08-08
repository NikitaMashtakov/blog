import styled from 'styled-components';
import { Icon } from '../../components';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 7px;
`;

const LogoContainer = ({ className }) => {
  return (
    <Link to={'/'} className={className}>
      <Icon id={'fa-code'} size={'70px'} />
      <TextColumn>
        <LargeText>Блог</LargeText>
        <SmallText>веб-разработчика</SmallText>
      </TextColumn>
    </Link>
  );
};

export const Logo = styled(LogoContainer)`
  display: flex;
`;

LogoContainer.propTypes = {
  className: PropTypes.string,
};
