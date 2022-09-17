import React, { useState } from "react";
import FormCSS from "./Form.module.css";
import RichText from "./RichText";
import Input from "./Input";

function Form({ onAddBlog }) {
  //set value from rich text
  const [value, setValue] = useState("");
  //initial value for inputs
  const [input, setInput] = useState({
    author: "",
    title: "",
    tag: "",
    caption: "",
    photographer: "",
    language: "",
  });
  //get image
  const [file, setFile] = useState(" ");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  function handleImageChange(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value != null && value.trim() !== "") {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("category", "category"); //edit
      formData.append("title", input.title);
      formData.append("content", value);
      formData.append("language", input.language);
      formData.append("photographer", input.photographer);
      formData.append("caption", input.caption);
      formData.append("tag", input.tag);
      formData.append("author_id", 1);
      formData.append("user_id", 1);

      fetch("http://localhost:9292/blogs", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      })
        .then((res) => res.json())
        .then((json) => onAddBlog(json));
      const clearInputs = {
        author: "",
        title: "",
        tag: "",
        caption: "",
        photographer: "",
        language: "",
      };
      setValue(" ");
      setFile(" ");
      setInput(clearInputs);
      console.log(value);
    } else {
      console.log("Error");
    }
  };
  // console.log(value);
  return (
    <>
      <form onSubmit={handleOnSubmit} className={FormCSS.form}>
        <div className={FormCSS.buttons}>
          <select>
            <option>English</option>
          </select>
          <div>
            <button>Preview</button>
            <button type="submit">Publish</button>
          </div>
        </div>
        <div className={FormCSS.formContainer}>
          <div>
            <Input
              id="author"
              type="text"
              name="author"
              value={input.author}
              onChange={handleOnChange}
              label="author"
            />
            <select id="category" name="categories" onChange={handleOnChange}>
              <option value={input.category}>Categories</option>
            </select>
            <Input
              id="title"
              type="text"
              name="title"
              value={input.title}
              onChange={handleOnChange}
              label="title"
            />
            <RichText setValue={setValue} />
            <Input
              id="tag"
              type="text"
              name="tag"
              value={input.tag}
              onChange={handleOnChange}
              label="tag"
            />
            <div className={FormCSS.imageUpload}>
              <div>
                <label>Upload image</label>
                <Input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  value={input.file}
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <label>Caption</label>
                <Input
                  id="caption"
                  type="text"
                  name="caption"
                  value={input.caption}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label>Photographer</label>
                <Input
                  id="photographer"
                  type="text"
                  name="photographer"
                  value={input.photographer}
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Form;
