import CommentsCSS from "./Comments.module.css";
import React from "react";
// import CommentsCard from "./CommentsCard";

function Comments() {
  return (
    <>
      <section>
        <div className={CommentsCSS.title}>
          <h3>Cleo Malala</h3>
          <span>2 minutes ago</span>
        </div>
        <div className={CommentsCSS.article}>
          <p>
            Great article, i would love to watch a video of this games this is
            superb
          </p>
        </div>
      </section>
    </>
  );
}
export default Comments;
