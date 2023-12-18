import classes from "./navbar.module.css";
import REDBERRYLOGO from "../../assets/redberry-logo.png";

const Navbar = () => {
  return (
    <div className={classes.background}>
      <div className={classes.navbar}>
        <img src={REDBERRYLOGO} alt="redberry-logo" />
        <button className={classes.button}>შესვლა</button>
      </div>
    </div>
  );
};

export default Navbar;
