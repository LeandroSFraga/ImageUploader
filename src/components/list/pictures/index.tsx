import axios from 'axios';
import classNames from 'classnames';
import { useState } from 'react';
import { IPicture } from '..';
import style from './picture.module.scss';

interface Props {
  picture: IPicture
  subtitle: string
}

export default function Picture({ picture, subtitle }: Props) {
  const [mouseselect, setMouseSelect] = useState(false);
  const [modal, setModal] = useState(false);

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
      <div className={classNames(style.modal, {
        [style.showModal]: !modal
      })}>
        <span
          className={style.close}
          onClick={() => setModal(false)}
        >&times;</span>
        <img
          className={style.modalContent}
          src={picture.link}
          id={picture.publicID}
          alt={subtitle}
        />
      </div>
      <img
        className={classNames(style.picture, {
          [style.picturefocus]: mouseselect
        })}
        src={picture.link}
        id={picture.publicID}
        alt={subtitle}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={() => setModal(true)}
      ></img>
      {mouseselect &&
        <div className={style.picturelabel}>{subtitle}</div>
      }
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