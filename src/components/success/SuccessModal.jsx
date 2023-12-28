import classes from "./successModal.module.css";
import SUCCESS_ICON from "../../assets/tick-circle.svg";
import X_LOGO from "../../assets/x_logo.svg";
import { useEffect, useRef } from "react";

const SuccesModal = ({ isOpen, onClose, onConfirm, success, ok }) => {
  if (!isOpen) return null;
  const ref = useRef();

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

  const handleBtnClick = () => {
    onConfirm();
  };

  return (
    <div className={classes["modal_overlay"]}>
      <div className={classes["modal_container"]} ref={ref}>
        <div className={classes.modal}>
          <div className={classes["modal_header"]}>
            <button className={classes["close_btn"]} onClick={onClose}>
              <img src={X_LOGO} alt="close-logo" className={classes.image} />
            </button>
            <img
              src={SUCCESS_ICON}
              alt="success_icon"
              className={classes["success_image"]}
            />
          </div>
          <div className={classes["modal_content"]}>
            <h1 className={classes["success_title"]}>{success}</h1>
          </div>
          <div className={classes["btn_cont"]}>
            <button className={classes["btn_ok"]} onClick={handleBtnClick}>
              {ok}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccesModal;
