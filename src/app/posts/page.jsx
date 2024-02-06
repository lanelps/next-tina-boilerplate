import { getAllBlogPosts } from "../../utils/fetchData";

const Blogs = async () => {
  const { data } = await getAllBlogPosts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 underline">Posts</h1>
      <ol className="flex flex-col list-decimal">
        {data.map((post) => (
          <li key={post.id} className="mb-4">
            <a
              href={`/posts/${post._sys.filename}`}
              className="text-xl hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Blogs;
