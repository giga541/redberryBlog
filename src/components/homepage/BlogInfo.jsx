import { useNavigate } from "react-router-dom";
import classes from "./blogInfo.module.css";
import Categories from "./Categories";
import ARROW from "../../assets/arrow.svg";
import BlogElement from "../../components/homepage/BlogElement"

const BlogInfo = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div className={classes["blog_container"]}>
      <div className={classes.blogs}>
        <ul className={classes.ul}>
          {blogs.map((blog, index) => {
            return (
              <BlogElement key={index} blog={blog}/>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogInfo;
