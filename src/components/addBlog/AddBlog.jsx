import classes from "./addBlog.module.css";
import REDBERRYLOGO from "../../assets/redberry-logo.png";

const AddBlog = () => {
  return (
    <>
      <div className={classes["image_container"]}>
        <img src={REDBERRYLOGO} alt="redberry-logo" />
      </div>
      <div className={classes.container}>
        <div>
          <h1 className={classes["add_blog"]}>ბლოგის დამატება</h1>
          <p className={classes["upload_photo"]}>ატვირთეთ ფოტო</p>
          <div>DragAndDropComponent</div>
          <div className={classes["input_select_container"]}>
            <div>
              <p className={classes.author}>ავტორი *</p>
              <input type="text" placeholder="შეიყვანეთ ავტორი" />
              <div className={classes.li}>
                <li>მინიმუმ 4 სიმბოლო </li>
                <li> მინიმუმ ორი სიტყვა</li>
                <li>მხოლოდ ქართული სიმბოლოები</li>
              </div>
            </div>
            <div className={classes.title}>
              <p>სათაური *</p>
              <input type="text" placeholder="შეიყვანეთ სათაური" />
              <p className={classes["validation_desc"]}>მინიმუმ 2 სიმბოლო </p>
            </div>
          </div>
          <p className={classes.description}>აღწერა *</p>
          <textarea></textarea>
          <p className={classes["validation_desc"]}>მინიმუმ 2 სიმბოლო </p>
          <div className={classes["input_select_container"]}>
            <div>
              <p className={classes["publish_date"]}>გამოქვეყნების თარიღი *</p>
              <input type="date" />
            </div>
            <div className={classes["category_cont"]}>
              <p className={classes.category}>კატეგორია</p>
              <select name="" id=""></select>
            </div>
          </div>
          <p>ელ-ფოსტა</p>
          <input type="email" />
          <button>back</button>
          <button>გამოქვეყნება</button>{" "}
        </div>
      </div>
    </>
  );
};

export default AddBlog;
