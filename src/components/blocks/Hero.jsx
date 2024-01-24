import React from "react";

const Hero = ({ data }) => {
  return (
    <section className="p-4 bg-blue-500 text-white">
      <h3 className="text-xl font-bold">Hero section</h3>
      <h2 className="text-2xl font-bold mb-2">{data.headline}</h2>
      <span className="font-semibold">{data.tagline}</span>
      <p className="mb-4">{data.text}</p>
    </section>
  );
};

export default Hero;