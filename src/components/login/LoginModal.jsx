import classes from "./loginModal.module.css";

const LoginModal = ({ onOpen, onClose }) => {
  if (!onOpen) return null;

  return (
    <>
      {/* <div className={classes["modal_overlay"]}></div> */}
      <div className={classes["modal_container"]}>
        <div className={classes.modal}>
          <div className={classes["modal_header"]}>
            <p className={classes.close} onClick={onClose}>
              &times;
            </p>
          </div>
          <div className={classes["modal_content"]}>
            <h1 className={classes["enter_title"]}>შესვლა</h1>
            <p className={classes.email}>ელ-ფოსტა</p>
            <input className={classes.input} type="text" />
            <button className={classes["btn_enter"]}>შესვლა</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
