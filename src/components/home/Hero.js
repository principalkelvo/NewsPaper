import React from "react";
import HeroCSS from "./Hero.module.css";
import News from "../news/News";
import Ticker from "../news/Ticker";
import StoryCard from "../news/StoryCard";

function Hero({ blogs }) {
  // console.log(blogs);
  const featuredBlog = blogs[0];
  const recentBlogs = blogs.slice(1).slice(-10).reverse();
  const topStories = blogs.sort(() => 0.5 - Math.random()).slice(0, 3);
  // console.log("topStories", topStories);
  // console.log("topStories", recentBlogs);
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
                <p className={HeroCSS.content}>
                  {/* show content as formated text without html tags */}
                  {/* later take only the first paragraph to be added */}
                  <span
                    dangerouslySetInnerHTML={{ __html: featuredBlog.content }}
                  />
                </p>
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
            <div>
              <StoryCard blogs={topStories} />
            </div>
          </div>

          <div className="column is-4">
            <h1>Latest Stories</h1>
            {/* gets the latest 3 items === blogs.slice(Math.max(blogs.length - 3, 0))*/}
            <Ticker blogs={recentBlogs} />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
