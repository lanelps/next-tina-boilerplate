import React from "react";

import Content from "./slices/Content";
import Features from "./slices/Features";
import Hero from "./slices/Hero";

const Slices = ({ slices }) =>
  slices?.length > 0 ? (
    <section className="flex flex-col w-full gap-8 py-4 my-4 border-t border-b border-black">
      {slices.map((slice, i) => {
        switch (slice.__typename) {
          case "PostSectionsContent":
            return (
              <React.Fragment key={i + slice.__typename}>
                <Content data={slice} />
              </React.Fragment>
            );
          case "PostSectionsHero":
            return (
              <React.Fragment key={i + slice.__typename}>
                <Hero data={slice} />
              </React.Fragment>
            );
          case "PostSectionsFeatures":
            return (
              <React.Fragment key={i + slice.__typename}>
                <Features data={slice} />
              </React.Fragment>
            );
          default:
            return null;
        }
      })}
    </section>
  ) : null;

export default Slices;
