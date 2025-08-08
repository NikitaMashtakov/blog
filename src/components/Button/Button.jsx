import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: ${({ width = '100%' }) => width};
  height: 32px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: #eee;
  cursor: ${({ disabled = false }) => (disabled ? 'default' : 'pointer')};
  margin: auto;
`;

ButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
