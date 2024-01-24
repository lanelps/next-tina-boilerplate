import React from "react";

import ContentSection from "../blog/ContentSection";

const Content = ({ data }) => (
  <section>
    <h3 className="text-xl font-bold">Content section</h3>
    <ContentSection content={data.body} />
  </section>
);

export default Content;
