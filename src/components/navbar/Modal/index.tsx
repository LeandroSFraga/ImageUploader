import style from './modal.module.scss';
import { MdAccountCircle, MdExitToApp } from 'react-icons/md';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  show: boolean;
}

export default function Modal({ show }: Props) {
  return (
    <div
      className={classNames(style.modal, {
        [style.showModal]: show,
      })}
    >
      <Link to={'/profile'} className={style.link}>
        <div className={style.field}>
          <MdAccountCircle className={style.icon} />
          <p className={style.text}>My Profile</p>
        </div>
      </Link>
      <hr color="red" className={style.line} />
      <div className={style.field}>
        <MdExitToApp
          className={classNames({ [style.icon]: true, [style.logout]: true })}
        />
        <p className={classNames({ [style.text]: true, [style.logout]: true })}>
          Logout
        </p>
      </div>
    </div>
  );
}
