import { getToken } from 'auth/token';
import LoginCard from 'components/registercard/logincard';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface LoginProps {
  setToken(value: string): void;
}

export default function Login({ setToken }: LoginProps) {
  function IsLogged() {
    const navigate = useNavigate();

    useEffect(() => {
      if (getToken()) {
        navigate('/');
      }
    }, [getToken()]);
  }

  return (
    <>
      <div>
        {getToken() ? <>{IsLogged()}</> : <LoginCard setToken={setToken} />}
      </div>
    </>
  );
}
