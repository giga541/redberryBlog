import { useState } from "react";
import classes from "./loginModal.module.css";

const LoginModal = ({ onOpen, onClose, onLogin }) => {
  if (!onOpen) return null;

  const [enteredEmail, setEnteredEmail] = useState("");

  const handleEmail = e => {
    setEnteredEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(enteredEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes["modal_container"]}>
        <div className={classes.modal}>
          <div className={classes["modal_header"]}>
            <span className={classes.close} onClick={onClose}>
              &times;
            </span>
          </div>
          <div className={classes["modal_content"]}>
            <h1 className={classes["enter_title"]}>შესვლა</h1>
            <p className={classes.email}>ელ-ფოსტა</p>
            <input
              className={classes.input}
              type="text"
              onChange={handleEmail}
              required
            />
            <button className={classes["btn_enter"]} onClick={onLogin}>
              შესვლა
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginModal;
