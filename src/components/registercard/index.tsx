import style from './logincard.module.scss';
import { ReactComponent as Logo } from '../../assets/img/devchallenges.svg';
import { MdEmail } from 'react-icons/md';
import { IoMdLock, IoMdPerson } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axiosClient from 'services/api/axios';
import { LoginProps } from 'pages/Login';

export default function RegisterCard({ setToken }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  async function Register(userInfos: object) {
    try {
      await axiosClient
        .post('/user', userInfos)
        .then((response) => {
          setToken(response.data.response.token);
          localStorage.setItem('id', response.data.response.id);
        })
        .then(() => window.location.reload());
    } catch (err) {
      console.log(err);
    }
  }

  async function handleRegister() {
    event?.preventDefault();
    const userInfos = {
      username: username,
      email: email,
      password: password,
    };
    await Register(userInfos);
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
            <IoMdPerson className={style.icon} />
            <input
              className={style.input}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={style.field}>
            <MdEmail className={style.icon} />
            <input
              className={style.input}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={style.field}>
            <IoMdLock className={style.icon} />
            <input
              className={style.input}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
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
