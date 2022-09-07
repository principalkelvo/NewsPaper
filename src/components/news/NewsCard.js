import NewsCardCSS from "./NewsCard.module.css";

// import { Link } from "react-router-dom";

function NewsCard() {
    return(
        <>
    <div className={NewsCardCSS.fullCard}>
    <div className="columns is-multiline"></div>
    </div>
    </>
    )
}

export default NewsCard;