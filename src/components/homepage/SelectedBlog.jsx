import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_TOKEN, API_URL } from "../../consts";

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
  return <div>SelectedBlog</div>;
};

export default SelectedBlog;
