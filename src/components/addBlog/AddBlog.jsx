import classes from "./addBlog.module.css";
import REDBERRYLOGO from "../../assets/redberry-logo.png";
import BackButton from "../button/BackButton";
import DragAndDrop from "./DragAndDrop";

const AddBlog = () => {
  return (
    <div>
      <div className={classes["image_container"]}>
        <img src={REDBERRYLOGO} alt="redberry-logo" />
      </div>
      <div className={classes["back_button"]}>
        <BackButton />
      </div>
      <div className={classes.container}>
        <div>
          <h1 className={classes["add_blog"]}>ბლოგის დამატება</h1>
          <p className={classes["upload_photo"]}>ატვირთეთ ფოტო</p>
          <DragAndDrop />
          <div className={classes["input_container"]}>
            <div>
              <p className={classes.author}>ავტორი *</p>
              <input
                className={classes.input}
                type="text"
                placeholder="შეიყვანეთ ავტორი"
              />
              <div className={classes.li}>
                <li>მინიმუმ 4 სიმბოლო </li>
                <li> მინიმუმ ორი სიტყვა</li>
                <li>მხოლოდ ქართული სიმბოლოები</li>
              </div>
            </div>
            <div className={classes["title_container"]}>
              <p className={classes.title}>სათაური *</p>
              <input
                className={classes.input}
                type="text"
                placeholder="შეიყვანეთ სათაური"
              />
              <p className={classes["validation_desc"]}>მინიმუმ 2 სიმბოლო </p>
            </div>
          </div>
          <p className={classes.description}>აღწერა *</p>
          <textarea className={classes.textarea}></textarea>
          <p className={classes["validation_desc"]}>მინიმუმ 2 სიმბოლო </p>
          <div className={classes["select_date_container"]}>
            <div>
              <p className={classes["publish_date"]}>გამოქვეყნების თარიღი *</p>
              <input className={classes.input} type="date" />
            </div>
            <div className={classes["category_cont"]}>
              <p className={classes.category}>კატეგორია</p>
              <select name="" id="" className={classes.select}></select>
            </div>
          </div>
          <div>
            <div className={classes["mail_container"]}>
              <p className={classes.mail}>ელ-ფოსტა</p>
              <input className={classes.input} type="email" />
            </div>
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
