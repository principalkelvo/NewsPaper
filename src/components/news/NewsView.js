import React from "react";
import NewsViewCSS from "./NewsView.module.css";
import { useParams } from "react-router";
import parse from "html-react-parser";

function NewsView({ blogs }) {
  const { id } = useParams();
  console.log("blogs 23", blogs);
  console.log("blogs 23 first", id);
  return (
    <section className={NewsViewCSS.news}>
      <div className="columns">
        <div className={NewsViewCSS.columns}>
          {blogs
            .filter((blog) => String(blog.id) === id) //change id to string for better comparison (type safe comparison)
            .map((blog) => (
              <div key={blog.id} className="column is-7">
                <div>
                  {/* title  */}
                  <h1>{blog.title}</h1>
                  {/* image  */}
                  <figure className={NewsViewCSS.image}>
                    <img src={blog.image} alt={blog.title} />
                    {/* caption  */}
                  </figure>
                  <div className={NewsViewCSS.caption}>
                    <em>photo by {blog.photographer}</em>
                  </div>

                  {/* blog/ content/ article  */}
                  <article>
                    <p>
                      {/* show content as formated text without html tags */}
                      {/* <span
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                      /> */}
                      <span
                      // dangerouslySetInnerHTML={{ __html: blog.content.split(" ").slice(0, 20).join(" ") }}
                      >
                        {parse(blog.content)}
                      </span>
                    </p>
                  </article>
                </div>
              </div>
            ))}

          {/* Ticker  */}
          <div className="column is-4">
            <div className={NewsViewCSS.container}>
              <h2>Ticker</h2>
              <div className={NewsViewCSS.tick}>
                <h3>Eyes on Arsenal</h3>
                <p>
                  Matano said he had observed his players during the pre-season
                  preparations, and most of them appeared rusty having...
                </p>
              </div>
              <div className={NewsViewCSS.tick}>
                <h3>Eyes on Arsenal</h3>
                <p>
                  Matano said he had observed his players during the pre-season
                  preparations, and most of them appeared rusty having...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsView;
