import classNames from 'classnames';
import Loading from 'components/loading';
import Success from 'components/success';
import { useState } from 'react';
import Button from '../button';
import style from './card.module.scss';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from 'services/api/axios';

function Card() {
  const [filebase64, setFileBase64] = useState('');
  const [uploaded, setUploaded] = useState(0);
  const [linkImage, setLinkImage] = useState('');
  const [valueLabel, setValueLabel] = useState('');
  const [file, setFile] = useState<File>();

  const navigate = useNavigate();

  async function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || '';
      const fileType: string = fileRef.type || '';
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (e) => {
        typeof e.target?.result === 'string'
          ? setFileBase64(`data:${fileType};base64,${btoa(e.target?.result)}`)
          : '';
      };
      setFile(fileRef);
      setUploaded(3);
    }
  }

  async function uploading(file: File | undefined) {
    if (file) {
      setUploaded(1);
      const formData = new FormData();
      formData.append('image', file);
      formData.append('subtitle', valueLabel);
      try {
        await axiosClient
          .post('/images', formData)
          .then((response) => {
            setLinkImage(response.data.response.link);
          })
          .then(() => setUploaded(2));
      } catch (err) {
        setUploaded(0);
      }
    }
  }

  function handleChange(e: string) {
    setValueLabel(e);
  }

  return (
    <div className={style.container}>
      <form
        encType="FORM-DATA"
        className={classNames(style.card, {
          [style.card]: true,
          [style.cardUploaded]: uploaded !== 0,
        })}
      >
        <div className={style.topCard}>
          <IoMdArrowRoundBack
            className={style.backArrow}
            onClick={() => navigate(-1)}
          />
        </div>
        <h1 className={style.cardTitleOne}>Upload your image</h1>
        <h2 className={style.cardTitleTwo}>File should be Jpeg, Png,...</h2>
        <div className={style.uploader}>
          <input
            type="file"
            id="input_file"
            className={style.uploaderInput}
            multiple
            accept="image/*"
            onChange={(e) => convertFile(e.target.files)}
          />
          <p className={style.cardText}>Drag & Drop your image here</p>
        </div>
        <p className={style.cardText}>Or</p>
        <Button htmlFor="input_file">Choose a File</Button>
      </form>
      <div
        className={classNames({
          [style.loaded]: uploaded !== 1,
        })}
      >
        <>
          <Loading />
        </>
      </div>
      <div
        className={classNames({
          [style.loaded]: uploaded !== 2,
        })}
      >
        <Success img={filebase64} linkImage={linkImage} />
      </div>
      <div
        className={classNames(style.card, {
          [style.loaded]: uploaded !== 3,
        })}
      >
        <input
          type="text"
          className={style.inputLabel}
          value={valueLabel}
          onChange={(event) => handleChange(event.target.value)}
          placeholder="Enter a label for the image..."
        ></input>
        <button className={style.submitButton} onClick={() => uploading(file)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Card;
