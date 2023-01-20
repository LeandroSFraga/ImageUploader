import style from './logincard.module.scss';
import { ReactComponent as Logo } from '../../assets/img/devchallenges.svg';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function RegisterCard() {
  return (
    <div className={style.loginContainer}>
      <div className={style.loginCard}>
        <Logo />
        <p className={style.loginCardTextPrincipal}>
          {' '}
          <b>
            Join thousands of learners from
            <br /> around the world
          </b>
        </p>
        <p className={style.loginCardText}>
          Master web development by making real-life <br /> projects. There are
          multiple paths for you to <br /> choose
        </p>
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
          <button className={style.cardButton}>Start coding now</button>
        </form>
        <p className={style.littleText}>
          already a member?{' '}
          <Link to={'/login'} className={style.textLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
