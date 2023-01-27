import classNames from 'classnames';
import { useUserStore } from 'hooks/useUserStore';
import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { axiosClient, axiosEdit } from 'services/api/axios';
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

  const [modalEdit, setModalEdit] = useState(false);
  const [valueLabel, setValueLabel] = useState('');

  const mouseOver = () => {
    setInfosForPictureIsVisible(true);
  };

  const mouseOut = () => {
    setInfosForPictureIsVisible(false);
  };

  async function deleteRequest(_id: string) {
    await axiosClient.delete(`/images/${_id}`);
    window.location.reload();
  }

  function handleEdit() {
    setModalEdit(!modalEdit);
  }

  function handleUpdateLabel(value: string) {
    setValueLabel(value);
  }

  async function editLabel() {
    const formData = new FormData();
    valueLabel && formData.append('subtitle', valueLabel);
    formData.append('id', picture._id);
    await axiosEdit
      .patch('/images', formData)
      .then(() => window.location.reload());
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
      <div
        className={classNames(style.modalEdit, {
          [style.showModal]: !modalEdit,
        })}
      >
        <input
          type={'text'}
          className={style.inputLabel}
          placeholder="Update image label..."
          value={valueLabel}
          onChange={(e) => handleUpdateLabel(e.target.value)}
        />
        <button className={style.updateLabelButton} onClick={() => editLabel()}>
          Update
        </button>
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
          {useUserStore.getState().user.id === picture.userId && (
            <>
              <button
                className={classNames(style.deleteButton)}
                onClick={() => deleteRequest(picture._id)}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                delete
              </button>
              <button
                className={classNames(style.editButton)}
                onClick={() => handleEdit()}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                <MdEdit />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
