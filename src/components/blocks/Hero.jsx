import React from "react";
import Image from "next/image";

const Hero = ({ data }) => {
  return (
    <section className="p-4 text-white bg-blue-500">
      <h3 className="text-xl font-bold">Hero section</h3>
      {data.heroImage && (
        <Image
          className="object-cover w-full aspect-video"
          width={1024}
          height={576}
          src={data.heroImage}
          alt="Hero image"
        />
      )}
      <h2 className="mb-2 text-2xl font-bold">{data.headline}</h2>
      <span className="font-semibold">{data.tagline}</span>
      <p className="mb-4">{data.text}</p>
    </section>
  );
};

export default Hero;
