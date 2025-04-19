import { useState } from "react";
import "./search.css";

function Search({ setSearchInput }) {
  const [query, setQuery] = useState("");
  async function searchHandler(e) {
    e.preventDefault();
    if (!query.trim()) return;
    const data = await searchData(query);
    if (data) {
      setSearchInput(data);
    } else {
      setSearchInput(null);
    }
  }
  return (
    <>
      <form onSubmit={searchHandler}>
        <input
          placeholder="sök produkt.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
}

export default Search;
