import { useEffect, useRef, useState } from "react";
import { API_URL } from "../../consts";
import { useAuth } from "../../providers/AuthProvider";
import classes from "./loginModal.module.css";
import X_LOGO from "../../assets/x_logo.svg";

const LoginModal = ({ isOpen, onClose }) => {
  const { setLoggedIn } = useAuth();
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
    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
      }),
    })
      .then(response => {
        if (response.status === 204) {
          setLoggedIn(true);
        } else {
          console.log("ERROR FAILED, SHOULD ADD ERROR");
        }
      })
      .catch(e => {
        console.log("Error occurred while trying to login", e);
      });
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
  }, [onClose]);

  return (
    <form onSubmit={handleSubmit}>
      <div className={isOpen ? classes["modal_overlay"] : classes.hidden}>
        <div className={classes["modal_container"]} ref={ref}>
          <div className={classes.modal}>
            <div className={classes["modal_header"]}>
              <button className={classes["close_btn"]} onClick={onClose}>
                <img src={X_LOGO} alt="x_logo" className={classes.image} />
              </button>
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
