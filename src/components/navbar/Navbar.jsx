import classes from "./navbar.module.css";
import REDBERRYLOGO from "../../assets/redberry-logo.png";
import LoginModal from "../login/LoginModal";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className={classes.background} ref={ref}>
      <div className={classes.navbar}>
        <img src={REDBERRYLOGO} alt="redberry-logo" className={classes.img} />
        <button className={classes.button} onClick={() => setIsOpen(true)}>
          შესვლა
        </button>
      </div>
      <LoginModal onOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;
