import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/user/events';
import { ErrorMessage, LoginForm, LoginWrapper } from './styles';
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

export function LoginPage(props: ILoginPageProps) {
  const navigate = useNavigate()


  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  
  const onSubmit = () => {
    if (error) {
      setError('')
    }
    if (login === 'foo' && password === 'bar') {
      dispatch(signIn())
      navigate('/', { replace: true });
      return
    }

    setError('Wrong login or password')
  }
  
  return (
    <LoginWrapper>
      <LoginForm autoComplete='no'>
        <p>Login = foo</p>
        <input autoComplete='no' onChange={e => setLogin(e.target.value)} value={login} />
        <p>Password = bar</p>
        <input autoComplete='no' type='password' onChange={e => setPassword(e.target.value)} value={password} />
        <ErrorMessage>{error}</ErrorMessage>
        <button type='submit' onClick={() => onSubmit()}>Login</button>
      </LoginForm>
    </LoginWrapper>
  );
}
