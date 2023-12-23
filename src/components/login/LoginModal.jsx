import { useState } from "react";
import classes from "./loginModal.module.css";

const LoginModal = ({ onOpen, onClose, updateButtonLabel }) => {
  if (!onOpen) return null;

  const [enteredEmail, setEnteredEmail] = useState("");

  const handleEmail = e => {
    setEnteredEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setEnteredEmail("");
  };

  const handleLogin = () => {
    updateButtonLabel(enteredEmail.trim() !== "");
    console.log(enteredEmail);

    onClose();
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
              value={enteredEmail}
              required
            />
            <button className={classes["btn_enter"]} onClick={handleLogin}>
              შესვლა
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginModal;
