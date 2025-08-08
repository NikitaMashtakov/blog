import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2Container = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

export const H2 = styled(H2Container)`
  font-size: 24px;
  margin-top: 20px;
  text-align: center;
`;

H2Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
