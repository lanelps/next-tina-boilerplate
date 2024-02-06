import { tinaField } from "tinacms/dist/react";
import Image from "next/image";

import ContentSection from "../components/blog/ContentSection";
import Blocks from "../components/blog/Blocks";

const BlogTemplate = ({ data }) => {
  if (!data) return <></>;

  const { title, author, body, sections } = data?.post;

  return (
    <>
      <h1
        className="mb-8 text-3xl font-extrabold leading-8 tracking-tight text-center sm:text-4xl"
        data-tina-field={tinaField(data, "title")}
      >
        {title}
      </h1>

      <div className="flex items-center justify-center gap-4">
        <p>By {author.name}</p>
        {author?.profile && (
          <Image
            className="overflow-hidden rounded-full"
            width={64}
            height={64}
            src={author?.profile}
            alt={author?.name}
          />
        )}
      </div>

      <ContentSection content={body} />
      <Blocks blocks={sections} />
    </>
  );
};

export default BlogTemplate;
