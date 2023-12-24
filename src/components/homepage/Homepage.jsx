import Navbar from "../navbar/Navbar";
import BLOGLOGO from "../../assets/blog-logo.png";
import classes from "./homepage.module.css";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import { API_TOKEN, API_URL } from "../../consts";
import Blog from "./Blog";
import { useMemo } from "react";

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const blogHasCategory = (blog, selectedCategories) => {
    for (const category of blog.categories) {
      if (selectedCategories.some(c => c.id === category.id)) {
        return true;
      }
    }
    return false;
  };

  const selectCategory = category => {
    if (selectedCategories.some(c => c.id === category.id)) {
      setSelectedCategories(
        selectedCategories.filter(c => c.id != category.id)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredBlogs = useMemo(() => {
    return selectedCategories.length == 0
      ? blogs
      : blogs.filter(blog => blogHasCategory(blog, selectedCategories));
  }, [selectedCategories, blogs]);

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
        setBlogs(data.data);
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
      <Categories categories={categories} onClick={selectCategory} />
      <Blog blogs={filteredBlogs} />
    </div>
  );
};

export default Homepage;
