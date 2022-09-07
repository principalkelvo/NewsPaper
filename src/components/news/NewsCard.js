import NewsCardCSS from "./NewsCard.module.css";

// import { Link } from "react-router-dom";

function NewsCard() {
  return (
    <>
      <div className={NewsCardCSS.fullCard}>
        <div className="columns is-multiline">
          <div className="column is-4">
            <div className={NewsCardCSS.card}>
              <figure className={NewsCardCSS.image}>
                <img src="#" alt="ProductName" />
               
              </figure>
              <figcaption>
                    <h4>
                        CEO Looper
                    </h4>
                    <p>NPC breaking news</p>
                    <div>
                    <p>2k views</p>
                    <p>2 min ago</p>
                    </div>
                </figcaption>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
