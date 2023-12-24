import classes from "./blog.module.css";
import Categories from "./Categories";

const Blog = ({ blogs }) => {
  if (!blogs || !blogs.data) {
    return null;
  }

  // const categoriesOfBlogs = blogs.data.map(category => {
  //   const BUTTON_STYLES = {
  //     backgroundColor: category.background_color,
  //     color: category.text_color,
  //   };

  //   return (
  //     <div key={category.id}>
  //       <button style={BUTTON_STYLES} className={classes.button}>
  //         {category.title}
  //       </button>
  //     </div>
  //   );
  // })}

  // const categoriesOfBlogs = blogs.data
  //   .map(blog => blog.categories)
  //   .map(categories => categories.map(category => category.title));

  return (
    <div className={classes.blog}>
      <ul className={classes.ul}>
        {blogs.data.map((blog, index) => {
          return (
            <li key={index} className={classes.li}>
              <img src={blog.image} alt="blog_img" className={classes.image} />
              <p className={classes.author}> {blog.author}</p>
              <p className={classes["publish_date"]}>{blog.publish_date}</p>
              <h1 className={classes.title}>{blog.title}</h1>
              <h2 className={classes.category}>
                <Categories categories={blog.categories} />
              </h2>
              <p className={classes.description}>
                {blog.description} description
              </p>
              <p className={classes["category_name"]}>სრულად ნახვა</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
