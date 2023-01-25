import Search from '../navbar/Search';
import Button from '../navbar/Button';
import styles from './navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import Perfil from './perfil';
import Modal from './Modal';
import { useState } from 'react';
import { getToken } from 'auth/token';

export interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export interface UserProps {
  useInfos: object;
}

export default function Navbar({ setSearch }: SearchProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarSide}>
        <Link to={'/'}>
          <Logo />
        </Link>
        <Search setSearch={setSearch} />
      </div>
      <div className={styles.navbarSide}>
        {getToken() ? (
          <>
            <Link to={'/upload'}>
              <Button>Add a Photo</Button>
            </Link>
            <div onClick={() => setShowModal(!showModal)}>
              <Perfil
                name={'logado'}
                image={'https://via.placeholder.com/32'}
              />
            </div>
          </>
        ) : (
          <div onClick={() => setShowModal(!showModal)}>
            <Perfil
              name={'Sem nome'}
              image={'https://via.placeholder.com/32'}
            />
          </div>
        )}
      </div>
      <Modal show={showModal} />
    </header>
  );
}
