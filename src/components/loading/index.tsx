import style from './loading.module.scss';
import classNames from 'classnames';

export default function Loading() {
  return (
    <div
      className={classNames(style.load, {
        [style.loadCard]: true,
      })}
    >
      <h2 className={style.loadCardText}>Uploading...</h2>
      <div className={style.progress}>
        <div className={style.progressValue}></div>
      </div>
    </div>
  );
}
