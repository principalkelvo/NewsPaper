import StoryCardCSS from "./StoryCard.module.css";

import { Link } from "react-router-dom";

function StoryCard({ blogs }) {
  blogs = blogs.sort((a, b) => Date.parse(b) - Date.parse(a));
  console.log("what does it do blogs", blogs);
  const allBlog = blogs.map((blog) => (
    <div key={blog.id}>
      <div className={StoryCardCSS.fullCard}>
        <div className="columns is-multiline">
          <div className="column is-12">
              <Link className={StoryCardCSS.link} to={`/blogs/${blog.id}`}>
            <div className={StoryCardCSS.card}>
                <figure className={StoryCardCSS.image}>
                  <img src={blog.image} alt={blog.title} />
                </figure>
                <div className={StoryCardCSS.content}>
                  <div>
                    <p>Andy Karanja</p>
                    <p>2 min ago</p>
                  </div>
                  <h1>{blog.title}</h1>
                  <p>{blog.category}</p>
                  <p>{blog.content.split(" ").slice(0, 20).join(" ")}</p>
                </div>
            </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>{allBlog}</>
    // <div key={blog.id}>
    //   <div className={StoryCardCSS.fullCard}>
    //     <div className="columns is-multiline">
    //       <div className="column is-4">
    //         <div className={StoryCardCSS.card}>
    //           <figure className={StoryCardCSS.image}>
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

export default StoryCard;
