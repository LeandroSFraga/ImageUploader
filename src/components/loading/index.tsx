import style from './loading.module.scss';
import classNames from 'classnames';

export default function Loading() {
  return (
    <div className={classNames(style.load, {
      [style.load_card]: true
    })}>
      <h2>Uploading...</h2>
      <div className={style.progress}>
        <div className={style.progress_value}></div>
      </div>
    </div>
  );
}