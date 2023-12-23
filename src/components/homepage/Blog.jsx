import classes from "./blog.module.css";

const Blog = ({ blogs }) => {
  if (!blogs.data) {
    console.error("Invalid 'blogs' prop:", blogs);
    return null;
  }
  return (
    <div>
      <ul>
        {blogs.data.map((blog, index) => (
          <li key={index}>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <img src={blog.image} alt="blog_img" className={classes.image} />
            <p>Publish Date: {blog.publish_date}</p>
            <p>Author: {blog.author}</p>
            <h2>Category:</h2>
            <p>Name: {blog.categories[0].name}</p>
            <p>Text Color: {blog.categories[0].text_color}</p>
            <p>Background Color: {blog.categories[0].background_color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
