import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_TOKEN, API_URL } from "../../consts";
import Navbar from "../navbar/Navbar";
import Categories from "./Categories";
import BackButton from "../button/BackButton";
import classes from "./selectedBlog.module.css";

const SelectedBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBlog(data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <BackButton />
      <div className={classes["blog_container"]}>
        <img src={blog.image} alt="blog_image" className={classes.image} />
        <p className={classes.author}> {blog.author}</p>
        <p className={classes["publish_date"]}>{blog.publish_date}</p>
        <p className={classes.title}>{blog.title}</p>
        <div className={classes["blog_categories"]}>
          <Categories categories={blog.categories} />
        </div>
        <p className={classes.description}>{blog.description} description</p>
      </div>
    </div>
  );
};

export default SelectedBlog;
