import style from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Página não existe!</h1>
    </div>
  );
}