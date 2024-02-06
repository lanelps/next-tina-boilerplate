import React from "react";
import { useSearchBox } from "react-instantsearch";

const Search = () => {
  const { query, refine } = useSearchBox();

  return (
    <div className="text-black [&_input]:py-2 [&_input]:px-2">
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={(e) => refine(e.target.value)}
          value={query}
        />
      </form>
    </div>
  );
};

export default Search;
