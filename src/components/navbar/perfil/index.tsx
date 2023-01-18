import style from './perfil.module.scss';
import { MdArrowDropDown } from 'react-icons/md';

interface Props {
  name: string,
  image: string | undefined
}


export default function Perfil({ name, image }: Props) {
  return (
    <div className={style.perfilContainer}>
      <img className={style.imagePerfil} src={image} />
      <p className={style.imageName}>{name}</p>
      <MdArrowDropDown size={16} />
    </div>
  );
}