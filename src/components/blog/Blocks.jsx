import React from "react";

import Content from "../blocks/Content";
import Features from "../blocks/Features";
import Hero from "../blocks/Hero";
// import { Testimonial } from "./blocks/testimonial";

const Blocks = ({ blocks }) =>
  blocks?.length > 0 ? (
    <section className="flex flex-col w-full gap-8 py-4 my-4 border-t border-b border-black">
      {blocks.map((block, i) => {
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
      })}
    </section>
  ) : null;

export default Blocks;
