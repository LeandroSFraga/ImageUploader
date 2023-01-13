import { useEffect, useState } from 'react';
import style from './list.module.scss';
import Picture from './pictures';
import axios from 'axios';


export interface IPicture {
  link: string
  publicId: string
}

export default function List() {
  const [picture, setPicture] = useState<IPicture[]>();

  useEffect(() => {
    axios.get('https://unsplash-yi42.onrender.com/images')
      .then(resposta => {
        setPicture(resposta.data.response);
      });

  }, []);

  return (
    <div className={style.imageslist}>
      {picture?.map((item) => (
        <Picture key={item.publicId} picture={item} />
      ))}

    </div>
  );
}