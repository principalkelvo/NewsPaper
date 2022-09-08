import React from "react";
import NewsViewCSS from "./NewsView.module.css";

function NewsView() {
  return (
    <section className={NewsViewCSS.news}>
      <div className="columns">
        <div className={NewsViewCSS.columns}>
          <div className="column is-7">
            {/* title  */}
            <h1>
              Herschel Walker Leads Hawks celebration as Bulldogs beat Spartans
            </h1>
            {/* image  */}
            <figure className={NewsViewCSS.image}>
              <img src="#" alt="title" />
              {/* caption  */}
              <figcaption>
                <em>photo by Njoroge</em>
              </figcaption>
            </figure>

            {/* blog/ content/ article  */}
            <article>
              <p>
                Herschel Walker was the star freshman running back on Georgia
                when he led the Bulldogs to their last national championship in
                1980 and was among the first to congratulate Kirby Smart and the
                team for beating Alabama for the title on Monday night.<br></br>{" "}
                Walker, who is running for U.S. Senate in Georgia, was among
                those who were pumped for the Bulldogs’ 33-18 victory over
                Alabama. In 1980, Walker ran for 1,616 yards and 15 touchdowns
                and helped the team beat Notre Dame for the title in the Sugar
                Bowl. Walker had 150 yards and a TD in that game.
              </p>
            </article>
          </div>

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
