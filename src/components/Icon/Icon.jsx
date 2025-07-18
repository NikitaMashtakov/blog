import styled from 'styled-components';

const IconContainer = ({ className, id, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <i className={`fa ${id}`} aria-hidden="true" />
    </div>
  );
};

export const Icon = styled(IconContainer)`
  font-size: ${({ size = '24px' }) => size};
  display: flex;
  align-items: center;
  & > i {
    margin: auto;
  }
  cursor: pointer;
  visibility: ${({ disable = false }) => `${!disable ? 'visible' : 'hidden'}`};
  margin: ${({ margin = 'inherit' }) => margin};
`;
