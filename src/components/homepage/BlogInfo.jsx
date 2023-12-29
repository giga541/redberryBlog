import classes from "./blogInfo.module.css";
import BlogElement from "../../components/homepage/BlogElement";

const BlogInfo = ({ blogs }) => {
  return (
    <div className={classes["blog_container"]}>
      <div className={classes.blogs}>
        <ul className={classes.ul}>
          {blogs.map((blog, index) => {
            return <BlogElement key={index} blog={blog} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogInfo;
