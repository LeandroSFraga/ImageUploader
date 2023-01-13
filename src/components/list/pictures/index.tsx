import { IPicture } from '..';
import style from './picture.module.scss';

interface Props {
  picture: IPicture
}

export default function Picture({ picture}: Props) {
  return (
    
    <img className={style.picture} src={picture.link} alt='imagem'></img>

  );
}