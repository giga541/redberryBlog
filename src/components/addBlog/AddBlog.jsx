import classes from "./addBlog.module.css";
import REDBERRY_LOGO from "../../assets/redberry-logo.png";
import INFO_CIRCLE from "../../assets/info-circle.svg";
import BackButton from "../button/BackButton";
import DragAndDrop from "./DragAndDrop";
import { useState } from "react";
import SelectCategories from "./SelectCategories";

const AddBlog = () => {
  const [file, setFile] = useState(null);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [georgianTitle, setGeorgianTitle] = useState("");

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleAuthor = e => {
    setAuthor(e.target.value);

    const georgianRegex = /^[ა-ჰ\s]+$/;
    const isGeorgian = georgianRegex.test(author);
    setGeorgianTitle(isGeorgian);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
  };

  const isValidEmail = emailCheck => {
    return emailCheck.includes("@redberry.ge");
  };
  const handleEmail = e => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const isEmailValid = isValidEmail(newEmail);

    setEmailError(!isEmailValid);
  };
  const borderStyle =
    email.length > 0
      ? isValidEmail(email)
        ? { border: "1px solid #14D81C" }
        : { border: "1px solid #EA1919" }
      : { border: "1px solid #e4e3eb" };

  return (
    <div>
      <div className={classes["image_container"]}>
        <img src={REDBERRY_LOGO} alt="redberry-logo" />
      </div>
      <div className={classes["back_button"]}>
        <BackButton />
      </div>
      <div className={classes.container}>
        <div>
          <h1 className={classes["add_blog"]}>ბლოგის დამატება</h1>
          <p className={classes["upload_photo"]}>ატვირთეთ ფოტო</p>
          <DragAndDrop file={file} setFile={setFile} />
          <div
            className={`${classes["input_container"]} ${
              file ? classes.fileDropped : ""
            }`}
          >
            <div>
              <p className={classes.author}>ავტორი *</p>
              <input
                className={`${classes.input} ${
                  author.trim().length >= 4 &&
                  author.trim().split(/\s+/).length >= 2 &&
                  georgianTitle
                    ? classes["green_outline"]
                    : author.trim().length > 0
                    ? classes["red_outline"]
                    : ""
                }`}
                type="text"
                placeholder="შეიყვანეთ ავტორი"
                onChange={handleAuthor}
              />
              <div className={classes.li}>
                <li
                  className={
                    author.trim().length >= 4
                      ? classes.green
                      : author.trim().length > 0
                      ? classes.red
                      : ""
                  }
                >
                  მინიმუმ 4 სიმბოლო
                </li>
                <li
                  className={
                    author.length > 0
                      ? author.trim().split(/\s+/).length >= 2
                        ? classes.green
                        : classes.red
                      : ""
                  }
                >
                  მინიმუმ ორი სიტყვა
                </li>
                <li
                  className={
                    author.length > 0
                      ? georgianTitle
                        ? classes.green
                        : classes.red
                      : ""
                  }
                >
                  მხოლოდ ქართული სიმბოლოები
                </li>
              </div>
            </div>
            <div className={classes["title_container"]}>
              <p className={classes.title}>სათაური *</p>
              <input
                className={`${classes.input} ${
                  title.trim().length >= 2
                    ? classes["green_outline"]
                    : title.trim().length > 0
                    ? classes["red_outline"]
                    : ""
                }`}
                type="text"
                placeholder="შეიყვანეთ სათაური"
                onChange={handleTitle}
              />
              <p
                className={`${classes["validation_desc"]} ${
                  title.trim().length >= 2
                    ? classes.green
                    : title.trim().length > 0
                    ? classes.red
                    : ""
                }`}
              >
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
          </div>
          <p className={classes.description}>აღწერა *</p>
          <textarea
            className={`${classes.textarea} ${
              description.trim().length >= 2
                ? classes["green_outline"]
                : description.trim().length > 0
                ? classes["red_outline"]
                : ""
            }`}
            placeholder="შეიყვანეთ აღწერა"
            onChange={handleDescription}
          ></textarea>
          <p
            className={`${classes["validation_desc"]} ${
              description.trim().length >= 2
                ? classes.green
                : description.trim().length > 0
                ? classes.red
                : ""
            }`}
          >
            მინიმუმ 2 სიმბოლო
          </p>
          <div className={classes["select_date_container"]}>
            <div>
              <p className={classes["publish_date"]}>გამოქვეყნების თარიღი *</p>
              <input className={classes.input} type="date" />
            </div>
            <div className={classes["category_cont"]}>
              {/* <p className={classes.category}>კატეგორია</p>
              <select name="" id="" className={classes.select}></select> */}
              <SelectCategories />
            </div>
          </div>
          <div>
            <div className={classes["mail_container"]}>
              <p className={classes.mail}>ელ-ფოსტა</p>
              <input
                className={classes.input}
                style={borderStyle}
                type="email"
                onChange={handleEmail}
              />
            </div>
            {emailError && email.length > 0 && !isValidEmail(email) ? (
              <div>
                <div className={`${classes["validation_container"]}`}>
                  <img
                    src={INFO_CIRCLE}
                    alt="info-circle"
                    className={classes["mail_image"]}
                  />
                  <span
                    className={`${classes["mail_validation"]} ${
                      emailError ? classes["red"] : ""
                    } ${!emailError ? classes["hidden_validation"] : ""}`}
                  >
                    მეილი უნდა მთავრდებოდეს @redberry.ge-
                  </span>
                </div>
                <div>
                  <span
                    className={`${classes.span} ${
                      emailError ? classes.red : ""
                    }`}
                  >
                    ით
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={classes["btn_container"]}>
            <button className={classes.button}>გამოქვეყნება</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
