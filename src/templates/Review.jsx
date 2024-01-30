import { tinaField } from "tinacms/dist/react";

import ContentSection from "../components/blog/ContentSection";
import Blocks from "../components/blog/Blocks";

const ReviewTemplate = ({ data }) => {
  if (!data) return <></>;

  const { title, body, sections } = data?.review;

  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1
          className="m-8 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
          data-tina-field={tinaField(data, "title")}
        >
          {title}
        </h1>
        <ContentSection content={body} />
        <Blocks blocks={sections} />
      </div>
      <div className="text-center bg-green-100">
        Lost and looking for a place to start?
        <a
          href="https://tina.io/guides/tina-cloud/getting-started/overview/"
          className="text-blue-500 underline"
        >
          {" "}
          Check out this guide
        </a>{" "}
        to see how add TinaCMS to an existing Next.js site.
      </div>
    </div>
  );
};

export default ReviewTemplate;
