"use client";

import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { Hits } from "react-instantsearch";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

const Hit = ({ hit }) => {
  return <li>{JSON.stringify(hit)}</li>;
};

const Results = () => {
  return (
    <InstantSearchNext
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <Hits hitComponent={Hit} />
    </InstantSearchNext>
  );
};

export default Results;
