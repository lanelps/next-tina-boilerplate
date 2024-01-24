import React from "react";

import ContentSection from "../blog/ContentSection";

const Content = ({ data }) => (
  <section>
    <ContentSection content={data.body} />
  </section>
);

export default Content;
