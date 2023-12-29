import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_TOKEN, API_URL } from "../../consts";
import Navbar from "../navbar/Navbar";
import Categories from "./Categories";
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
      {/* <img src={blog.image} key={id}></img> */}
      <p className={classes.author}> {blog.author}</p>
      <p className={classes["publish_date"]}>{blog.publish_date}</p>
      <h1 className={classes.title}>{blog.title}</h1>
      {/* <Categories categories={blog.categories} /> */}
      <h2 className={classes["blog_categories"]}></h2>
      <p className={classes.description}>{blog.description} description</p>
    </div>
  );
};

export default SelectedBlog;
