import client from "../../../../tina/__generated__/client";
import BlogTemplate from "../../../templates/Blog";

import { getBlogPostData } from "../../../utils/fetchData";

export const dynamic = "force-dynamic";

const Blog = async ({ params }) => {
  const { data } = await getBlogPostData(params.slug);

  return <BlogTemplate data={data} />;
};

export const generateStaticParams = async () => {
  const posts = await client.queries.postConnection();

  return posts.data.postConnection.edges.map((post) => {
    return {
      slug: post.node._sys.filename,
    };
  });
};

export default Blog;
