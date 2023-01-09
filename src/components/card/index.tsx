import Button from "../button";
import Uploader from "../uploader";
import style from "./card.module.scss";

function Card() {
    return (
        <div className={style.card}>
            <h1>Upload your image</h1>
            <h2>File should be Jpeg, Png,...</h2>
            <Uploader/>
            <p>Or</p>
            <Button type="submit">
                Choose a File
            </Button>
        </div>
    )
}

export default Card;