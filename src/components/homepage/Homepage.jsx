import Navbar from "../navbar/Navbar";
import BLOGLOGO from "../../assets/blog-logo.png";
import classes from "./homepage.module.css";
import { useEffect, useState } from "react";
import Categories from "./Categories";

const Homepage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.blog.redberryinternship.ge/api/categories")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCategories(data.data);
      });
  }, []);

  // function fetchCategories() {}
  return (
    <div>
      <Navbar />
      <div className={classes.blog}>
        <div className={classes["blog-name"]}>ბლოგი</div>
        <img src={BLOGLOGO} alt="" className={classes.img} />
      </div>
      <Categories categories={categories} />
    </div>
  );
};

export default Homepage;
