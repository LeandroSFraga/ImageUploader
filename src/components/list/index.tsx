import { useEffect, useState } from 'react';
import style from './list.module.scss';
import Picture from './pictures';
import classNames from 'classnames';
import { axiosClient } from 'services/api/axios';
import { redirect } from 'react-router-dom';
import { listSearchProps } from 'pages/Home';

export interface IPicture {
  _id: string;
  link: string;
  publicID: string;
  subtitle: string;
}

export default function List({ search }: listSearchProps) {
  const [picture, setPicture] = useState<IPicture[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      axiosClient
        .get('/images')
        .then((resposta) => {
          setPicture(resposta.data.response);
        })
        .then(() => setLoading(false));
    } catch (err) {
      redirect('/notfound');
    }
  }, []);

  return (
    <div className={style.imagesList}>
      <div
        className={classNames({
          [style.loading]: loading,
        })}
      ></div>
      <div>
        {picture
          ?.slice(0)
          .reverse()
          .map((item) =>
            item.subtitle.toLowerCase().includes(search.toLowerCase()) ? (
              <Picture key={item._id} picture={item} subtitle={item.subtitle} />
            ) : (
              ''
            )
          )}
      </div>
    </div>
  );
}
