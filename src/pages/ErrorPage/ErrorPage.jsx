import { H2 } from 'components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorPageContainer = ({ message = 'Такой страницы не существует' }) => {
  return <H2>{message}</H2>;
};

export const ErrorPage = styled(ErrorPageContainer)``;

ErrorPageContainer.propTypes = {
  message: PropTypes.string,
};
