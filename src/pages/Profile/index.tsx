import { getToken } from 'auth/token';
import EditProfile from 'components/profile';
import { useUserStore } from 'hooks/useUserStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getByToken from 'services/api/getByToken';

export default function Profile() {
  console.log(useUserStore.getState());
  function IsLogged() {
    const navigate = useNavigate();

    useEffect(() => {
      getByToken();
      if (getToken()) {
        navigate('/');
      }
    }, [getToken()]);
  }
  return <div>{getToken() ? <EditProfile /> : <>{IsLogged()}</>}</div>;
}
