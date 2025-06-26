import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { server } from '../../bff/server';
import { FormError, Input } from '../../components';
import styled from 'styled-components';
import { Button } from '../../components/';
import { Link, Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  margin-top: 20px;
  font-size: 18px;
`;

const regFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Логин не должен быть пустым')
    .matches(/^\w+$/, 'Неверно заполнен логин. Логин должен содержать буквы и цифры')
    .min(3, 'Логин должен быть длиннее 3 символов')
    .max(15, 'Логин не должен быть длиннее 15 символов'),
  password: yup
    .string()
    .required('Пароль не должен быть пустым')
    .matches(
      /^[\w#%]+$/,
      'Неверно заполнен пароль, допускаются только буквы, цифры и знаки # %',
    )
    .min(6, 'Пароль должен быть длиннее 6 символов')
    .max(30, 'Пароль не должен быть длиннее 30 символов'),
  passcheck: yup
    .string()
    .required('Пароль не должен быть пустым')
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const RegistrationPageContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
      passcheck: '',
    },
    resolver: yupResolver(regFormSchema),
  });

  const [serverError, setServerError] = useState();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);

  const onSubmit = ({ login, password }) => {
    server.register(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса ${error}`);
        return;
      }
      dispatch(setUser(res));
    });
  };

  const formError =
    errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className={className}>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин"
          {...register('login', { onChange: () => setServerError(null) })}
        />
        <Input
          type="password"
          placeholder="Пароль"
          {...register('password', { onChange: () => setServerError(null) })}
        />
        <Input
          type="password"
          placeholder="Повторите пароль"
          {...register('passcheck', { onChange: () => setServerError(null) })}
        />
        <Button type="submit" disabled={formError}>
          Зарегистрироваться
        </Button>
        {errorMessage && <FormError>{errorMessage}</FormError>}
        <StyledLink to={'/register'}>Нет аккаунта? Зарегистрироваться</StyledLink>
      </form>
    </div>
  );
};

RegistrationPageContainer.propTypes = {};

export const RegistrationPage = styled(RegistrationPageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  & > form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    width: 260px;
  }
`;
