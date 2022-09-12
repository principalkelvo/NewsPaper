import React from "react";
import HeroCSS from "./Hero.module.css";
import News from "../news/News";

function Hero({ blogs }) {
  // console.log(blogs);
  const featuredBlog = blogs[0];
  console.log(featuredBlog);
  return (
    <>
      <header className={HeroCSS.section + " " + HeroCSS.hero}>
        <div className="columns">
          <div className="column is-12">
            <figure className={HeroCSS.image}>
              <img src={featuredBlog.image} alt={featuredBlog.title}></img>
              <figcaption className={HeroCSS.brief}>
                <p className={HeroCSS.author}>
                  Andy Karanja - <span>{featuredBlog.created_at}</span>
                </p>
                <h1>{featuredBlog.title}</h1>
                <p className={HeroCSS.content}>{featuredBlog.content}</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <hr></hr>
      </header>
      <section className={HeroCSS.section}>
        <h1>Top Headlines</h1>
        <div className={HeroCSS.topStories}>
          <News blogs={blogs} />
        </div>

        <div className="columns">
          <div className="column is-8">
            <h1>Top Stories</h1>
            <div className={"columns is-multiline"}>
              <News blogs={blogs} />
            </div>
          </div>

          <div className="column is-4">
            <h1>Latest Stories</h1>
            <News blogs={blogs} />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
