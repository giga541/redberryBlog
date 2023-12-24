import classes from "./successModal.module.css";
import SUCCESS_ICON from "../../assets/success-icon.svg";
import { useEffect, useRef } from "react";

const SuccesModal = ({ isOpen, onClose }) => {
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

  return (
    <div className={classes["modal_overlay"]}>
      <div className={classes["modal_container"]} ref={ref}>
        <div className={classes.modal}>
          <div className={classes["modal_header"]}>
            <span className={classes.close}>&times;</span>
            <img src={SUCCESS_ICON} alt="" />
          </div>

          <div className={classes["modal_content"]}>
            <h1 className={classes["enter_title"]}>წარმატებული ავტორიზაცია</h1>
            <button className={classes["btn_enter"]}>კარგი</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccesModal;
