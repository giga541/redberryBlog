import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import { API_TOKEN, API_URL } from "../../consts";
import Navbar from "../navbar/Navbar";
import Categories from "./Categories";
import BackButton from "../button/BackButton";
import classes from "./selectedBlog.module.css";
import ARROW_LEFT from "../../assets/arrow-left.svg";
import ARROW_RIGHT from "../../assets/arrow-right.svg";
import BlogElement from "./BlogElement";

const SelectedBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [similarBlogs, setSimilarBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [blogsOnCurrentPage, setBlogsOnCurrentPage] = useState([]);
  const [offset, setOffeset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0)


  const haveCommonCategories = (blog1, blog2) => {
    const categories1 = blog1.categories.map(c => c.id)
    const categories2 = blog2.categories.map(c => c.id)
    return categories1.some(c => categories2.includes(c))
  }

  useEffect(() => {
    setMaxOffset(filteredBlogs.length - 3)
    setBlogsOnCurrentPage(filteredBlogs.slice(offset, offset + 3))
  }, [filteredBlogs, offset])

  useEffect(() => {
    if (similarBlogs && blog) {
      setFilteredBlogs(similarBlogs.filter(b => b.id != blog.id && haveCommonCategories(b, blog)))
    }
  }, [similarBlogs])

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
  }, [id]);

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
        setSimilarBlogs(data.data);
        console.log(data);
      });
  }, []);


  return (
    <div>
      <Navbar />
      <BackButton />
      { blog && <div className={classes["blog_container"]}>
        <img src={blog.image} alt="blog_image" className={classes.image} />
        <p className={classes.author}> {blog.author}</p>
        <p className={classes["publish_date"]}>{blog.publish_date} • {blog.email}</p>
        <p className={classes.title}>{blog.title}</p>
        <div className={classes["blog_categories"]}>
          <Categories categories={blog.categories} />
        </div>
        <p className={classes.description}>{blog.description} description</p>
      </div> }
      <div className={classes["similar-blogs-container"]}>
        <div className={classes["similar-blogs-header"]}>
          <h1>მსგავსი სტატიები</h1>
          <div className={classes["arrows"]}>
            <img src={ARROW_LEFT} className={classes["arrow-left"]} onClick={() => setOffeset(Math.max(offset - 1, 0))}/>
            <img src={ARROW_RIGHT} className={classes["arrow-right"]} onClick={() => setOffeset(Math.min(offset + 1, maxOffset))} />
          </div>
        </div>
        <div className={classes["similar-blogs-list"]}>
          { blogsOnCurrentPage.map(blog => (
            <BlogElement blog={blog} />
          ) )}
        </div>
      </div>
    </div>
  );
};

export default SelectedBlog;
