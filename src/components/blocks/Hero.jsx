import React from "react";
import Image from "next/image";

const Hero = ({ data }) => {
  return (
    <section className="flex flex-col gap-4 p-8 text-white bg-blue-500">
      <h3 className="text-xl font-bold">Hero section</h3>
      <h2 className="text-2xl font-bold">{data.headline}</h2>
      <span className="font-semibold">{data.tagline}</span>
      {data.heroImage && (
        <Image
          className="object-cover w-full aspect-video"
          width={1024}
          height={576}
          src={data.heroImage}
          alt="Hero image"
        />
      )}
      <p className="">{data.text}</p>
    </section>
  );
};

export default Hero;
