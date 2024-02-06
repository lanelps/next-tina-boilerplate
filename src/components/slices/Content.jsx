import React from "react";

import ContentSection from "../ContentSection";

const Content = ({ data }) => (
  <section className="w-full bg-white p-8">
    <h3 className="text-xl font-bold">Content section</h3>
    <ContentSection content={data.body} />
  </section>
);

export default Content;
