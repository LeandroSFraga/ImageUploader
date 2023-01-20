import { useEffect, useState } from 'react';
import style from './list.module.scss';
import Picture from './pictures';
import axios from 'axios';
import classNames from 'classnames';


export interface IPicture {
  _id: string
  link: string
  publicID: string
  subtitle: string
}

export default function List() {
  const [picture, setPicture] = useState<IPicture[]>();
  const [loading, setloading] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setloading(true);
    axios.get('https://unsplash-yi42.onrender.com/images')
      .then(resposta => {
        setPicture(resposta.data.response);
      }).then(() => setloading(false));

  }, []);

  return (
    <div className={style.imageslist}>
      <div className={classNames({
        [style.ldsring]: loading,
        [style.ldsringstop]: !loading
      })}><div></div><div></div><div></div><div></div></div>
      <div>
        {picture?.map((item) => (
          item.subtitle.includes('')
            ?
            <Picture key={item._id} picture={item} subtitle={item.subtitle} />
            : ''
        ))}
      </div>

    </div>
  );
}