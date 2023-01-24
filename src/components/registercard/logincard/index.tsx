import style from '../logincard.module.scss';
import { ReactComponent as Logo } from '../../../assets/img/devchallenges.svg';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs';
import { useState } from 'react';
import { LoginProps } from 'pages/Login';
// import axiosClient from 'services/api/axios';

export default function LoginCard({ setToken }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // async function Login(userInfos: object) {
  //   try {
  //     await axiosClient.post('/user', userInfos).then((response) => {
  //       console.log(response);
  //       setToken(response.data.response.id);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  function handleLogin() {
    event?.preventDefault();
    console.log(`email: ${email} \nsenha: ${password}`);
    // setToken(token);
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.loginCard}>
        <Logo />
        <p className={style.loginCardTextPrincipal}> Login</p>
        <form className={style.form} onSubmit={() => handleLogin()}>
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
          <button className={style.cardButton}>Login</button>
        </form>
        <p className={style.littleText}>
          or continue with these social profile
        </p>
        <div className={style.socialMedia}>
          <div>
            <BsGoogle size={18} />
          </div>
          <div>
            <BsFacebook size={18} />
          </div>
          <div>
            <BsTwitter size={18} />
          </div>
          <div>
            <BsGithub size={18} />
          </div>
        </div>
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
