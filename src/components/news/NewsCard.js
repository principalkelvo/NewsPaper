import NewsCardCSS from "./NewsCard.module.css";

import { Link } from "react-router-dom";

function NewsCard({ blogs }) {
  console.log("blogs", blogs);
  blogs = blogs.sort((a, b) => Date.parse(b) - Date.parse(a));
  const allBlog = blogs.map((blog) => (
    <div key={blog.id}>
      <Link className={NewsCardCSS.link} to={`/blogs/${blog.id}`}>
        <div className={NewsCardCSS.fullCard}>
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className={NewsCardCSS.card}>
                <figure className={NewsCardCSS.image}>
                  <img src={blog.image} alt={blog.title} />
                </figure>
                <div>
                  <h4>CEO Looper</h4>
                  <p>{blog.category}</p>
                  <div>
                    <p>2k views</p>
                    <p>2 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <>{allBlog}</>
    // <div key={blog.id}>
    //   <div className={NewsCardCSS.fullCard}>
    //     <div className="columns is-multiline">
    //       <div className="column is-4">
    //         <div className={NewsCardCSS.card}>
    //           <figure className={NewsCardCSS.image}>
    //             <img src={blog.image} alt={blog.title} />
    //           </figure>
    //           <figcaption>
    //             <h4>CEO Looper</h4>
    //             <p>NPC breaking news</p>
    //             <div>
    //               <p>2k views</p>
    //               <p>2 min ago</p>
    //             </div>
    //           </figcaption>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default NewsCard;
