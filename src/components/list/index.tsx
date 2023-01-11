import style from './list.module.scss';
import Picture from './pictures';

export default function List() {
  return (
    <div className={style.imageslist}>
      <Picture/>
      <Picture/>
      <Picture/>
      <Picture/>
    </div>
  );
}