import { useState, useEffect } from "react";

function SearchBar({ setSearch }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(input);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <input
      className="search"
      placeholder="Search coin..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default SearchBar;