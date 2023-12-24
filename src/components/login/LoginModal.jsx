import { useEffect, useRef, useState } from "react";
import classes from "./loginModal.module.css";

const LoginModal = ({ isOpen, onClose, updateButtonLabel }) => {
  if (!isOpen) return null;

  const [enteredEmail, setEnteredEmail] = useState("");

  const ref = useRef();

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

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes["modal_overlay"]}>
        <div className={classes["modal_container"]} ref={ref}>
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
      </div>
    </form>
  );
};

export default LoginModal;
