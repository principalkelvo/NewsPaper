import TickerCSS from "./Ticker.module.css";

import { Link } from "react-router-dom";

function Ticker({ blogs }) {
  blogs = blogs.sort((a, b) => Date.parse(b) - Date.parse(a));
  console.log("what does it do blogs", blogs);
  const allBlog = blogs.map((blog) => (
    <div key={blog.id}>
      <Link className={TickerCSS.link} to={`/blogs/${blog.id}`}>
        <div className={TickerCSS.card}>
          <figure className={TickerCSS.image}>
            <img src={blog.image} alt={blog.title} />
          </figure>
          <div className={TickerCSS.content}>
            <div>
              <p>{blog.created_at}</p>
              <p>2 min ago</p>
            </div>
            <h4>{blog.title}</h4>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className={TickerCSS.fullCard}>
      <>{allBlog}</>
    </div>
    // <div key={blog.id}>
    //   <div className={TickerCSS.fullCard}>
    //     <div className="columns is-multiline">
    //       <div className="column is-4">
    //         <div className={TickerCSS.card}>
    //           <figure className={TickerCSS.image}>
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

export default Ticker;
