import { useNavigate } from "react-router-dom";
import classes from "./blogInfo.module.css";
import Categories from "./Categories";
import ARROW from "../../assets/arrow.svg";

const BlogInfo = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div className={classes["blog_container"]}>
      <div className={classes.blogs}>
        <ul className={classes.ul}>
          {blogs.map((blog, index) => {
            return (
              <div className={classes["li_container"]} key={index}>
                <li className={classes.list}>
                  <img
                    src={blog.image}
                    alt="blog_img"
                    className={classes.image}
                  />
                  <p className={classes.author}> {blog.author}</p>
                  <p className={classes["publish_date"]}>{blog.publish_date}</p>
                  <h1 className={classes.title}>{blog.title}</h1>
                  <div className={classes["blog_categories"]}>
                    <Categories categories={blog.categories} />
                  </div>
                  <p className={classes.description}>
                    {blog.description} description
                  </p>
                  <button
                    className={classes["category_name"]}
                    onClick={() => {
                      navigate(`/blogs/${blog.id}`);
                    }}
                  >
                    სრულად ნახვა
                    <img
                      src={ARROW}
                      alt="arrow"
                      className={classes["btn_img"]}
                    />
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogInfo;
