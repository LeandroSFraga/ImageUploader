import style from './logincard.module.scss';
import { ReactComponent as Logo } from '../../assets/img/devchallenges.svg';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    event?.preventDefault();
    console.log(`email: ${email} \nsenha: ${password}`);
  }

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
        <form className={style.form} onSubmit={() => handleRegister()}>
          <div className={style.field}>
            <MdEmail className={style.icon} />
            <input
              className={style.input}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.field}>
            <IoMdLock className={style.icon} />
            <input
              className={style.input}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
