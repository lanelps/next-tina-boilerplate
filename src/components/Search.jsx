"use client";

import React from "react";
import algoliasearch from "algoliasearch/lite";
import { SearchBox } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

const Search = () => {
  return (
    <div className="text-black">
      <InstantSearchNext
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox />
        {/* other widgets */}
      </InstantSearchNext>
    </div>
  );
};

export default Search;
