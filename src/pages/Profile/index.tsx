import { getToken } from 'auth/token';
import EditProfile from 'components/profile';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  function IsLogged() {
    const navigate = useNavigate();

    useEffect(() => {
      if (getToken()) {
        navigate('/');
      }
    }, [getToken()]);
  }
  return <div>{getToken() ? <EditProfile /> : <>{IsLogged()}</>}</div>;
}
