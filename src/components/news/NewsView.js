import React from "react";
import NewsViewCSS from "./NewsView.module.css";
import { useParams } from "react-router";

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
                      {blog.content}
                      {/* Herschel Walker was the star freshman running back on Georgia
                when he led the Bulldogs to their last national championship in
                1980 and was among the first to congratulate Kirby Smart and the
                team for beating Alabama for the title on Monday night.<br></br>{" "}
                Walker, who is running for U.S. Senate in Georgia, was among
                those who were pumped for the Bulldogs’ 33-18 victory over
                Alabama. In 1980, Walker ran for 1,616 yards and 15 touchdowns
                and helped the team beat Notre Dame for the title in the Sugar
                Bowl. Walker had 150 yards and a TD in that game. */}
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
                        Matano said he had observed his players during the
                        pre-season preparations, and most of them appeared rusty
                        having...
                      </p>
                    </div>
                    <div className={NewsViewCSS.tick}>
                      <h3>Eyes on Arsenal</h3>
                      <p>
                        Matano said he had observed his players during the
                        pre-season preparations, and most of them appeared rusty
                        having...
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
