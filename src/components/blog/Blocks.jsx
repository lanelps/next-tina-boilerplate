import React from "react";

import Content from "../blocks/content";
import Features from "../blocks/features";
import Hero from "../blocks/hero";
// import { Testimonial } from "./blocks/testimonial";

const Blocks = ({ blocks }) => (
  <section className="border border-red-600">
    <h2>Slices</h2>
    {blocks
      ? blocks.map((block, i) => {
          switch (block.__typename) {
            case "PostSectionsContent":
              return (
                <React.Fragment key={i + block.__typename}>
                  <Content data={block} />
                </React.Fragment>
              );
            case "PostSectionsHero":
              return (
                <React.Fragment key={i + block.__typename}>
                  <Hero data={block} />
                </React.Fragment>
              );
            case "PostSectionsFeatures":
              return (
                <React.Fragment key={i + block.__typename}>
                  <Features data={block} />
                </React.Fragment>
              );
            default:
              return null;
          }
        })
      : null}
  </section>
);

export default Blocks;
