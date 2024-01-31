import Search from "../../components/Search";
import Results from "../../components/Results";

export const dynamic = "force-dynamic";

const SearchPage = () => {
  return (
    <section className="flex gap-4">
      <Search />
      <Results />
    </section>
  );
};

export default SearchPage;
