import Navbar from "../navbar/Navbar";
import BLOGLOGO from "../../assets/blog-logo.png";
import classes from "./homepage.module.css";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import { API_TOKEN, API_URL } from "../../consts";
import Blog from "./Blog";

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.blog.redberryinternship.ge/api/categories")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCategories(data.data);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/blogs`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={classes.blog}>
        <div className={classes["blog-name"]}>ბლოგი</div>
        <img src={BLOGLOGO} alt="" className={classes.img} />
      </div>
      <Categories categories={categories} />
      <Blog blogs={blogs} />
    </div>
  );
};

export default Homepage;
