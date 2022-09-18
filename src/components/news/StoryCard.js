import StoryCardCSS from "./StoryCard.module.css";

import { Link } from "react-router-dom";

function StoryCard({ blogs }) {
  //not working sorting blogs with dates
  blogs = blogs.sort((a, b) => Date.parse(b) - Date.parse(a));
  console.log("what does it do blogs", blogs);

  //get all blogs from the current app.js
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
                  <p>
                    {/* {blog.content.split(" ").slice(0, 20).join(" ")} */}

                  {/* show content as formated text without html tags */}
                  <span
                        dangerouslySetInnerHTML={{ __html: blog.content.split(" ").slice(0, 20).join(" ") }}
                      />
                  </p>
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
  );
}

export default StoryCard;
