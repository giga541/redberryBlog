import classes from "./navbar.module.css";
import REDBERRYLOGO from "../../assets/redberry-logo.png";
import LoginModal from "../login/LoginModal";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("შესვლა");
  // const [emailIsValid, setEmailIsValid] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    if (buttonLabel === "დაამატე ბლოგი") {
      navigate("/AddBlog");
    } else {
      setIsOpen(true);
    }
  };

  const handleLogin = () => {
    setButtonLabel("დაამატე ბლოგი");
  };

  let ref = useRef();
  useEffect(() => {
    const handler = e => {
      if (!ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={classes.background}>
      <div className={classes.navbar}>
        <img src={REDBERRYLOGO} alt="redberry-logo" className={classes.img} />
        <button className={classes.button} onClick={handleClick}>
          {buttonLabel}
        </button>
      </div>
      <div ref={ref}>
        <LoginModal
          onOpen={isOpen}
          onClose={() => setIsOpen(false)}

          // onLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Navbar;
