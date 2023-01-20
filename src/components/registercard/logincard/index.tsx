import style from '../logincard.module.scss';
import { ReactComponent as Logo } from '../../../assets/img/devchallenges.svg';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function LoginCard() {
  return (
    <div className={style.loginContainer}>
      <div className={style.loginCard}>
        <Logo />
        <p className={style.loginCardTextPrincipal}> Login</p>
        <form className={style.form}>
          <div className={style.field}>
            <MdEmail className={style.icon} />
            <input className={style.input} type="email" placeholder="Email" />
          </div>
          <div className={style.field}>
            <IoMdLock className={style.icon} />
            <input
              className={style.input}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className={style.cardButton}>Login</button>
        </form>
        <p className={style.littleText}>
          Don’t have an account yet?{' '}
          <Link to={'/register'} className={style.textLink}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
