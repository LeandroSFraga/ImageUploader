import style from './profile.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { BsFillCameraFill } from 'react-icons/bs';
import classNames from 'classnames';
import { useState } from 'react';
import { axiosClient } from 'services/api/axios';
import { removeToken } from 'auth/token';
import { useUserStore } from 'hooks/useUserStore';

export default function EditProfile() {
  const [card, setCard] = useState(false);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState<File>();
  const [FileBase64, setFileBase64] = useState(
    'https://via.placeholder.com/72'
  );

  async function convertFile(files: FileList | null) {
    console.log(useUserStore.getState().user);
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
      setImage(fileRef);
    }
  }

  async function handleEditProfile() {
    event?.preventDefault();

    const formData = new FormData();
    const id = localStorage.getItem('id');
    if (id) {
      formData.append('id', id);
    }
    if (image) {
      formData.append('image', image);
    }
    formData.append('username', name);
    formData.append('bio', bio);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('password', password);
    await editAccount(formData);
  }

  async function editAccount(userInfos: FormData) {
    event?.preventDefault();
    try {
      axiosClient.put('/user', userInfos).then(
        // () => getByToken(),
        () => window.location.reload()
      );
    } catch (err) {
      console.log(err);
    }
  }

  function deleteAccount() {
    event?.preventDefault();
    try {
      axiosClient
        .delete(`/user/${useUserStore.getState().user._id}`)
        .then(() => {
          removeToken();
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={style.profileContainer}>
      <div
        className={classNames(style.profileCardContainer, {
          [style.profileDisplay]: card,
        })}
      >
        <div className={style.personalContainer}>
          <h1 className={style.personalInfo}>Personal info</h1>
          <p className={style.personalDesc}>
            Basic info, like your name and photo
          </p>
        </div>
        <div className={style.cardInfoProfile}>
          <div className={style.cardHeader}>
            <div>
              <h2 className={style.headerProfile}>Profile</h2>
              <p className={style.headerDesc}>
                Some info may be visible to other people
              </p>
            </div>
            <button
              className={style.headerButton}
              onClick={() => setCard(true)}
            >
              Edit
            </button>
          </div>
          <div className={style.cardRows}>
            <div className={style.row}>
              <p className={style.rowCategory}>PHOTO</p>
              <img
                className={style.rowPhoto}
                src={useUserStore.getState().user.profilePicture}
              />
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>NAME</p>
              <p className={style.rowText}>
                {useUserStore.getState().user.username}
              </p>
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>BIO</p>
              <p className={style.rowText}>
                {useUserStore.getState().user.bio}
              </p>
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>PHONE</p>
              <p className={style.rowText}>
                {useUserStore.getState().user.phone}
              </p>
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>EMAIL</p>
              <p className={style.rowText}>
                {useUserStore.getState().user.email}
              </p>
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>PASSWORD</p>
              <p className={style.rowText}>************</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(style.profileCardContainer, {
          [style.profileDisplay]: !card,
        })}
      >
        <div>
          <div className={style.backButton} onClick={() => setCard(false)}>
            <IoIosArrowBack />
            <p className={style.backButtonText}>Back</p>
          </div>
        </div>
        <div className={style.profileCard}>
          <h1 className={style.profileTitle}>Change Info</h1>
          <p className={style.profileDesc}>
            Changes will be reflected to every services
          </p>
          <form encType="FORM-DATA">
            <div className={style.profileChangePhoto}>
              <div className={style.profilePhoto}>
                <img className={style.profileImage} src={FileBase64} />
                <BsFillCameraFill className={style.camIcon} />
                <input
                  type="file"
                  id="input_file"
                  className={style.uploaderInput}
                  multiple
                  accept="image/*"
                  onChange={(e) => convertFile(e.target.files)}
                />
              </div>
              <p className={style.photoText}>CHANGE PHOTO</p>
            </div>

            <p className={style.inputText}>Name</p>
            <div>
              <textarea
                className={style.input}
                placeholder="Enter your name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <p className={style.inputText}>Bio</p>
            <div>
              <textarea
                className={classNames(style.input, { [style.inputBio]: true })}
                placeholder="Enter your bio..."
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <p className={style.inputText}>Phone</p>
            <div>
              <textarea
                className={style.input}
                placeholder="Enter your phone..."
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <p className={style.inputText}>Email</p>
            <div>
              <textarea
                className={style.input}
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p className={style.inputText}>Password</p>
            <div>
              <textarea
                className={style.input}
                placeholder="Enter your new password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className={style.editButton} onClick={handleEditProfile}>
                Save
              </button>
              <button
                className={style.deleteButton}
                onClick={() => deleteAccount()}
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
