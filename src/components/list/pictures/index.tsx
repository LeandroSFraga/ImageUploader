import axios from 'axios';
import classNames from 'classnames';
import { useState } from 'react';
import { IPicture } from '..';
import style from './picture.module.scss';

interface Props {
  picture: IPicture
}

export default function Picture({ picture }: Props) {
  const [mouseselect, setMouseSelect] = useState(false);

  const mouseOver = () => {
    setMouseSelect(true);
  };

  const mouseOut = () => {
    setMouseSelect(false);
  };

  async function deleteRequest(publicID: string) {
    await axios.delete(`https://unsplash-yi42.onrender.com/images/${publicID}`)
      .then(resposta => (console.log(resposta))
      );
    window.location.reload();
  }

  return (
    <div className={style.containerPicture}>
      <img
        className={classNames(style.picture, {
          [style.picturefocus]: mouseselect
        })}
        src={picture.link}
        id={picture.publicID}
        alt='imagem'
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      ></img>
      {mouseselect && (
        <label
          className={classNames(style.deletebutton)}
          onClick={() => deleteRequest(picture.publicID)}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >delete</label>
      )}
    </div >
  );
}