import { getToken } from 'auth/token';
import RegisterCard from 'components/registercard';
import { LoginProps } from 'pages/Login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ setToken }: LoginProps) {
  function IsLogged() {
    const navigate = useNavigate();

    useEffect(() => {
      if (getToken()) {
        navigate('/');
      }
    }, [getToken()]);
  }
  return (
    <div>
      {getToken() ? <>{IsLogged()}</> : <RegisterCard setToken={setToken} />}
    </div>
  );
}
