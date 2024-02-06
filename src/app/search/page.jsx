"use client";

import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

import Search from "../../components/Search";
import Results from "../../components/Results";

export const dynamic = "force-dynamic";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

const SearchPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <section className="flex flex-col gap-4">
      <InstantSearchNext
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <Search />
        <Results />
      </InstantSearchNext>
    </section>
  ) : null;
};

export default SearchPage;
