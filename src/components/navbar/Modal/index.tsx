import style from './modal.module.scss';
import { MdAccountCircle, MdExitToApp } from 'react-icons/md';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { getToken, removeToken } from 'auth/token';

interface Props {
  show: boolean;
}

export default function Modal({ show }: Props) {
  function logout() {
    removeToken();
    window.location.assign('/login');
  }
  return (
    <div
      className={classNames(style.modal, {
        [style.showModal]: show,
      })}
    >
      {getToken() ? (
        <>
          <Link to={'/profile'} className={style.link}>
            <div className={style.field}>
              <MdAccountCircle className={style.icon} />
              <p className={style.text}>My Profile</p>
            </div>
          </Link>
          <hr className={style.line} />
          <button className={style.buttonLogout} onClick={() => logout()}>
            <div className={style.field}>
              <MdExitToApp
                className={classNames({
                  [style.icon]: true,
                  [style.logout]: true,
                })}
              />
              <p
                className={classNames({
                  [style.text]: true,
                  [style.logout]: true,
                })}
              >
                Logout
              </p>
            </div>
          </button>
        </>
      ) : (
        <Link to={'/login'} className={style.link}>
          <div className={style.field}>
            <MdAccountCircle className={style.icon} />
            <p className={style.text}>Sign In</p>
          </div>
        </Link>
      )}
    </div>
  );
}
