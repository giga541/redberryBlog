import { useNavigate } from "react-router-dom";
import classes from "./blog.module.css";
import Categories from "./Categories";

const Blog = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div className={classes["blog_container"]}>
      <div className={classes.blogs}>
        <ul className={classes.ul}>
          {blogs.map((blog, index) => {
            return (
              <li key={index} className={classes.list}>
                <img
                  src={blog.image}
                  alt="blog_img"
                  className={classes.image}
                />
                <p className={classes.author}> {blog.author}</p>
                <p className={classes["publish_date"]}>{blog.publish_date}</p>
                <h1 className={classes.title}>{blog.title}</h1>
                <h2 className={classes["blog_categories"]}>
                  <Categories categories={blog.categories} />
                </h2>
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
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
