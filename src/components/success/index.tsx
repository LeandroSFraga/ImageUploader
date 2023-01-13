import style from './success.module.scss';
import { MdVerified } from 'react-icons/md';
import { useState } from 'react';

interface Props {
  img: string
  linkImage: string
}

export default function Success({ img, linkImage }: Props) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={style.card}>
      <MdVerified fill='#219653' />
      <h1 className={style.title}>Uploaded Successfully</h1>
      <img className={style.img} src={img} alt='image uploaded'></img>
      <div className={style.label}>
        <label className={style.link} htmlFor='copy'><p className={style.text}>{linkImage}</p></label>
        <button id='copy' className={style.button} onClick={() => {
          navigator.clipboard.writeText(linkImage);
          setCopied(true);
        }}>
          {copied ? 'Copied' : 'Copy link'}
        </button>
      </div>
    </div>
  );
}