
import classNames from 'classnames';
import Loading from 'components/loading';
import Success from 'components/success';
import { useState } from 'react';
import Button from '../button';
import style from './card.module.scss';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function Card() {
  const [filebase64, setFileBase64] = useState<string>('');
  const [uploaded, setuploaded] = useState(0);  // 0 = upload 1 == loading 2 == success 3 == label
  const [linkimage, setlinkimage] = useState<string>('');
  const [valueLabel, setvalueLabel] = useState('');
  const [file, setFile] = useState<File>();

  const navigate = useNavigate();


  async function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || '';
      const fileType: string = fileRef.type || '';
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (e: any) => {
        setFileBase64(`data:${fileType};base64,${btoa(e.target.result)}`);
      };
      setFile(fileRef);
      setuploaded(3);
    }
  }
  async function uploading(file: any) {
    setuploaded(1);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('subtitle', valueLabel);
    const conect = await fetch('https://unsplash-yi42.onrender.com/images', {
      method: 'POST',
      body: formData
    });
    const conectConvert = await conect.json();
    console.log(conectConvert);
    setlinkimage(conectConvert.response.imageLink);
    setuploaded(2);
  }

  function handleChange(e: string) {
    setvalueLabel(e);
  }


  return (
    <div className={style.container}>
      <form encType='FORM-DATA' className={classNames(style.card, {
        [style.card]: true,
        [style.card__uploaded]: uploaded !== 0

      })}>
        <div className={style.topCard}>
          <IoMdArrowRoundBack className={style.backarrow} onClick={() => navigate(-1)} />
        </div>
        <h1>Upload your image</h1>
        <h2>File should be Jpeg, Png,...</h2>
        <div
          className={style.uploader}
        >
          <input
            type="file"
            id='input_file'
            className={style.uploader_input}
            multiple accept='image/*'
            onChange={(e) => convertFile(e.target.files)}
          />
          <p>Drag & Drop your image here</p>
        </div>
        <p>Or</p>
        <Button htmlFor='input_file'>
          Choose a File
        </Button>
      </form>
      <div className={classNames({
        [style.loaded]: uploaded !== 1
      })}>
        <>
          <Loading />
        </>
      </div>
      <div className={classNames({
        [style.loaded]: uploaded !== 2
      })}>
        <Success img={filebase64} linkImage={linkimage} />
      </div>
      <div className={classNames(style.card, {
        [style.loaded]: uploaded !== 3
      })} >
        <input
          type='text'
          className={style.inputLabel}
          value={valueLabel}
          onChange={(event) => handleChange(event.target.value)}
          placeholder='Enter a label for the image...'>
        </input>
        <button className={style.submitButton} onClick={() => uploading(file)}>Submit</button>
      </div>

    </div >
  );
}

export default Card;