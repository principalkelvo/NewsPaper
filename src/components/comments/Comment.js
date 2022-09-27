import CommentCSS from "./Comment.module.css";
import React, { useState } from "react";
// import CommentCard from "./CommentCard";
import Input from "../forms/Input";
import Comments from "../comments/Comments"

function Comment( eachBlog ) {
  console.log("blogs lastly", eachBlog);

  const [input, setInput] = useState({
    comment: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.comment != null && input.comment.trim() !== "") {
      console.log("onSubmit: ", input.comment);
    } else {
      console.log("Error");
    }
  };
  return (
    // is not same as the one on the design because it imports styles from the input component
    <>
      <form onSubmit={handleOnSubmit} className={CommentCSS.form}>
        <Input
          id="comment"
          type="text"
          name="comment"
          value={input.comment}
          onChange={handleOnChange}
          label="Add a Comment ..."
        />
        <div className={CommentCSS.buttons}>
          <button>Cancel</button>
          <button type="submit">Comment</button>
        </div>
      </form>

      <div className={CommentCSS.form}>
        <Comments eachBlog={eachBlog}/>
      </div>
    </>
  );
}
export default Comment;
