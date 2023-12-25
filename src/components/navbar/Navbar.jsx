import classes from "./navbar.module.css";
import REDBERRYLOGO from "../../assets/redberry-logo.png";
import LoginModal from "../login/LoginModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import SuccessModal from "../login/SuccessModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("შესვლა");
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (buttonLabel === "დაამატე ბლოგი") {
      navigate("/AddBlog");
    } else {
      setIsOpen(true);
    }
  };

  const handleConfirm = () => {
    setButtonLabel("დაამატე ბლოგი");
    setIsOpen(false);
  };

  return (
    <div className={classes.background}>
      <div className={classes.navbar}>
        <img src={REDBERRYLOGO} alt="redberry-logo" className={classes.img} />
        <button className={classes.button} onClick={handleLoginClick}>
          {buttonLabel}
        </button>
      </div>
      <div>
        {!isLoggedIn ? (
          <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        ) : (
          <SuccessModal
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
