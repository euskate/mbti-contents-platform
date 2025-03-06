import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BLOGS } from "../data/BLOGS";
import { BlogRenderer } from "../components/blog/BlogRenderer";

export const Blog = () => {
  const { testParam } = useParams();
  const navigate = useNavigate();
  const [blogContent, setBlogContent] = useState({});
  useEffect(() => {
    //first
    const theBlog = BLOGS.find((blog) => blog.testUrl === testParam);
    if (!theBlog) {
      console.log("해당 블로그 글은 존재하지 않습니다.");
      navigate("/");
    }
    setBlogContent(theBlog);
  }, [testParam]);

  return <BlogRenderer content={blogContent} />;
};
