"use client";

import { useEffect, useState } from "react";
import { useTina } from "tinacms/dist/react";

import BlogTemplate from "../../../../templates/Blog";
import { getBlogPostData } from "../../../../utils/fetchData";

const Blog = ({ params }) => {
  const [blogData, setBlogData] = useState(null);

  // Pass our data through the "useTina" hook to make it editable
  const { data } = useTina({
    query: blogData?.query,
    variables: blogData?.variables,
    data: blogData?.data,
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await getBlogPostData(params.slug);
      setBlogData(data);
    };

    fetchBlogData();
  }, [params.slug]);

  return <BlogTemplate data={data} />;
};

export default Blog;
