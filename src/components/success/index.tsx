import style from './success.module.scss';
import {MdVerified} from 'react-icons/md';

interface Props{
  img: string
}

export default function Success({img}: Props) {
  return (
    <div className={style.card}>
      <MdVerified fill='#219653' />
      <h1 className={style.title}>Uploaded Successfully</h1>
      <img className={style.img} src={img} alt='image uploaded'></img>
      {/* <div>
        <label></label>
        <button></button>
      </div> */}
    </div>
  );
}