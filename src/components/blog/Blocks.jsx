import React from "react";

import Content from "../blocks/Content";
import Features from "../blocks/Features";
import Hero from "../blocks/Hero";
// import { Testimonial } from "./blocks/testimonial";

const Blocks = ({ blocks }) => (
  <section className="w-full my-4 py-4 border-black border-t border-b flex flex-col gap-8">
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
