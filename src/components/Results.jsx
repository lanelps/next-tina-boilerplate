"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import algoliasearch from "algoliasearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { Hits } from "react-instantsearch";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

const Hit = ({ hit }) => {
  return (
    <li>
      <Link href={hit.objectID.replace("content", "").replace(".mdx", "")}>
        {hit.title}
      </Link>
    </li>
  );
};

const Results = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <InstantSearchNext
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <Hits hitComponent={Hit} />
    </InstantSearchNext>
  ) : null;
};

export default Results;
