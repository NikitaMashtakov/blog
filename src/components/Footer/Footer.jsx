import { useEffect, useState } from 'react';
import { getWeather } from '../../utils/getWeather';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FooterContainer = ({ className }) => {
  const [weather, setWeather] = useState({
    name: 'Москва',
    temp: null,
    description: '',
  });
  useEffect(() => {
    getWeather().then(({ name, main, weather }) =>
      setWeather({
        name,
        temp: Math.round(main.temp),
        description: weather[0].description,
      }),
    );
  }, []);
  return (
    <footer className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.com</div>
      </div>

      <div>
        <div>{`${weather.name}, ${new Date().toLocaleString('ru', {
          day: 'numeric',
          month: 'long',
        })}
        `}</div>

        <div>{`${weather.temp || ''}°C, ${weather.description}`}</div>
      </div>
    </footer>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 120px;
  width: inherit;
  padding: 20px 40px;
  box-shadow: 0 2px 17px #616161;
  background-color: #fff;
  font-weight: bold;
`;

FooterContainer.propTypes = {
  className: PropTypes.string,
};
