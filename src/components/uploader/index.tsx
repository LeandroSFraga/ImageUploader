import style from './uploader.module.scss';

function Uploader(){
    return (
        <div className={style.uploader}>
            <p>Drag & Drop your image here</p>
        </div>
    )
}

export default Uploader;