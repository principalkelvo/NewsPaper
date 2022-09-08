import React, { useState } from "react";
import FormCSS from "./Form.module.css";
import RichText from "./RichText";
import Input from "./Input";

function Form() {
  const [input, setInput] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
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
            <RichText />
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
                  id="file"
                  type="file"
                  name="file"
                  value={input.file}
                  onChange={handleOnChange}
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
