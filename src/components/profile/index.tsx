import style from './profile.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { BsFillCameraFill } from 'react-icons/bs';
import classNames from 'classnames';
import { useState } from 'react';

export default function EditProfile() {
  const [card, setCard] = useState(false);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEditProfile() {
    event?.preventDefault();
    console.log(`name: ${name}\n
    bio: ${bio}\n
    phone: ${phone}\n
    email: ${email}\n
    password: ${password}\n`);
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
                src="https://via.placeholder.com/72"
              />
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>NAME</p>
              <p className={style.rowText}>Xanthe Neal</p>
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>BIO</p>
              <p className={style.rowText}>
                I am a software developer and a big fan of devchallenges...
              </p>
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>PHONE</p>
              <p className={style.rowText}>908249274292</p>
            </div>
            <div className={style.row}>
              <p className={style.rowCategory}>EMAIL</p>
              <p className={style.rowText}>xanthe.neal@gmail.com</p>
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
          <div className={style.profileChangePhoto}>
            <div className={style.profilePhoto}>
              <img
                className={style.profileImage}
                src="https://via.placeholder.com/72"
              />
              <BsFillCameraFill className={style.camIcon} />
            </div>
            <p className={style.photoText}>CHANGE PHOTO</p>
          </div>
          <form onSubmit={() => handleEditProfile()}>
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
            <button className={style.editButton}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
