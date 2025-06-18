import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const authFormSchema = yup.object().shape({
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
      'Неверно заполнен пароль, допускаются только буквы, цифры и знаки # %'
        .min(6, 'Пароль должен быть длиннее 3 символов')
        .max(30, 'Пароль не должен быть длиннее 15 символов'),
    ),
});

const AuthPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  });
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Логин" {...register('login')} />
      <input type="password" placeholder="Пароль" {...register('password')} />
      <button type="submit">Войти</button>
    </form>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
