import React from "react";

const Features = ({ data }) => {
  return (
    <section className="p-4 bg-blue-300">
      <h3 className="text-xl font-bold">Features section</h3>
      <ul className="space-y-4">
        {data.items.map((item, i) => (
          <li
            key={i + item.__typename}
            className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md"
          >
            <h3 className="mb-2 text-xl font-bold text-black">{item.title}</h3>
            <p className="text-gray-700">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
