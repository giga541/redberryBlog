import BACK_ARROW_SVG from "../../assets/back-arrow.svg";
import classes from "./backButton.module.css";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      <img src={BACK_ARROW_SVG} alt="back_arrow" />
    </button>
  );
};

export default BackButton;
