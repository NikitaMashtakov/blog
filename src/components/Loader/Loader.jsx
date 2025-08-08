import styled from 'styled-components';

export const Loader = styled.span`
  width: ${({ size = '20px' }) => size};
  height: ${({ size = '20px' }) => size};
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #6ebeff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
