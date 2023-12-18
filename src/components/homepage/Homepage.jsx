import Navbar from "../navbar/Navbar";
import BLOGLOGO from "../../assets/blog-logo.png";
import classes from "./homepage.module.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.blog}>
        <div className={classes["blog-name"]}>ბლოგი</div>
        <img src={BLOGLOGO} alt="" className={classes.img} />
      </div>
    </div>
  );
};

export default Homepage;
