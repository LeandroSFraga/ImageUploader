import axios from 'axios';
import classNames from 'classnames';
import { useState } from 'react';
import { IPicture } from '..';
import style from './picture.module.scss';

interface Props {
  picture: IPicture;
  subtitle: string;
}

export default function Picture({ picture, subtitle }: Props) {
  const [infosForPictureIsVisible, setInfosForPictureIsVisible] =
    useState(false);
  const [modal, setModal] = useState(false);

  const mouseOver = () => {
    setInfosForPictureIsVisible(true);
  };

  const mouseOut = () => {
    setInfosForPictureIsVisible(false);
  };

  async function deleteRequest(_id: string) {
    await axios
      .delete(`https://unsplash-yi42.onrender.com/images/${_id}`)
      .then((resposta) => console.log(resposta));
    window.location.reload();
  }

  return (
    <div className={style.containerPicture}>
      <div
        className={classNames(style.modal, {
          [style.showModal]: !modal,
        })}
      >
        <span className={style.close} onClick={() => setModal(false)}>
          &times;
        </span>
        <img
          className={style.modalContent}
          src={picture.link}
          id={picture._id}
          alt={subtitle}
        />
        <h1 className={style.modalText}>{subtitle}</h1>
      </div>
      <img
        className={classNames(style.picture, {
          [style.pictureHover]: infosForPictureIsVisible,
        })}
        src={picture.link}
        id={picture._id}
        alt={subtitle}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={() => setModal(true)}
      ></img>
      {infosForPictureIsVisible && (
        <>
          <label
            className={style.picturelabel}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            htmlFor={picture._id}
          >
            {subtitle}
          </label>
          <button
            className={classNames(style.deleteButton)}
            onClick={() => deleteRequest(picture._id)}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          >
            delete
          </button>
        </>
      )}
    </div>
  );
}
