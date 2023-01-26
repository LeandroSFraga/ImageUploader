import { getToken } from 'auth/token';
import EditProfile from 'components/profile';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  function IsnotLogged() {
    const navigate = useNavigate();
    navigate('/');
  }
  return <div>{getToken() ? <EditProfile /> : <>{IsnotLogged()}</>}</div>;
}
