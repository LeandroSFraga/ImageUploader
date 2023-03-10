import style from './button.module.scss';

interface Props {
  htmlFor: string;
  children?: React.ReactNode;
}

function Button({ htmlFor, children }: Props) {
  return (
    <>
      <label className={style.button} htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
}

export default Button;
