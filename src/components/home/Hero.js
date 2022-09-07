import React from "react";
import HeroCSS from "./Hero.module.css";

function Hero() {
  return (
    <>
      <header className={HeroCSS.section + " " + HeroCSS.hero}>
        <div className="columns">
          <div className="column is-12">
            <figure className={HeroCSS.image}>
              <img src="#" alt="featured"></img>
              <figcaption className={HeroCSS.brief}>
                <p className={HeroCSS.author}>
                  Andy Karanja - <span>Jan 9,2022</span>
                </p>
                <h1>
                  Herschel Walker Leads Hawks celebration as Bulldogs beat
                  Spartans
                </h1>
                <p className={HeroCSS.content}>
                  Herschel Walker was the star freshman running back on Georgia
                  when he led the Bulldogs to their last national championship
                  in 1980 and was among the first to congratulate Kirby Smart
                  and the team for beating Alabama for the title on Monday
                  night.<br></br> Walker, who is running for U.S. Senate in
                  Georgia, was among those who were pumped for the Bulldogs’
                  33-18 victory over Alabama. In 1980, Walker ran for 1,616
                  yards and 15 touchdowns and helped the team beat Notre Dame
                  for the title in the Sugar Bowl. Walker had 150 yards and a TD
                  in that game.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <hr></hr>
      </header>
      <section className={HeroCSS.section}>
        <div className="columns">
          <div className="column is-12">
            <h1>Top Headlines</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-8">
            <h1>Top Stories</h1>
          </div>
          <div className="column is-4">
            <h1>Latest Stories</h1>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
