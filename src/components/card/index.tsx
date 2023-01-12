import classNames from 'classnames';
import Loading from 'components/loading';
import Success from 'components/success';
import React, { useState } from 'react';
import Button from '../button';
import style from './card.module.scss';

function Card() {
  const [filebase64, setFileBase64] = useState<string>('');
  const [uploaded, setuploaded] = useState(0);
  const [images, setImages] = useState<File>();
  const [classname, setClassname] = useState<string>('style.uploader');



  async function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || '';
      const fileType: string = fileRef.type || '';
      console.log('This file upload is of type:', fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (e: any) => {
        setFileBase64(`data:${fileType};base64,${btoa(e.target.result)}`);
      };
      setuploaded(1);
    }
  }

  function formSubmit(e: any) {
    e.preventDefault();
    // Submit your form with the filebase64 as 
    // one of your fields
    console.log({ filebase64 });
    alert('here you\'d submit the form using\n the filebase64 like any other field');
  }


  return (
    <div>
      <form className={classNames(style.card, {
        [style.card]: true,
        [style.card__uploaded]: uploaded === 1

      })} onSubmit={formSubmit}>
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
      {filebase64 &&
        <div className={classNames({
          [style.loaded]: uploaded === 2
        })}>
          <>
            <Loading/>

            {/* {(filebase64.indexOf('image/') > -1) &&
            <img src={filebase64} width={300} />
          } */}
          </>
        </div>
      }
      {uploaded === 2 &&
        <>
          <Success />
        </>
      }
    </div>
  );
}

export default Card;