import React from "react";
import Link from "next/link";

import { useHits } from "react-instantsearch";

const Hit = ({ hit }) => {
  return (
    <Link href={hit.objectID.replace("content", "").replace(".mdx", "")}>
      {hit.title}
    </Link>
  );
};

const Results = () => {
  const { hits } = useHits();

  return (
    <>
      <h3>Results: {hits.length}</h3>
      <ul className="pt-4 border-t border-black">
        {hits.map((hit) => (
          <li key={hit.objectID}>
            <Hit hit={hit} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Results;
