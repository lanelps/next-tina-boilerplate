import { tinaField } from "tinacms/dist/react";
import Image from "next/image";

import ContentSection from "../components/ContentSection";
// import Slices from "../components/Slices";

const EssayTemplate = ({ data }) => {
  if (!data) return <></>;

  const { title, body, image } = data?.essay;

  return (
    <>
      <h1
        className="mb-8 text-3xl font-extrabold leading-8 tracking-tight text-center sm:text-4xl"
        data-tina-field={tinaField(data, "title")}
      >
        {title}
      </h1>

      {image && <Image src={image} alt="" width={1920} height={1080} className="aspect-video object-cover" />}

      <ContentSection content={body} />
      {/* <Slices slices={sections} /> */}
    </>
  );
};

export default EssayTemplate;
