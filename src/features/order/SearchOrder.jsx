import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      className="rounded-full px-4 py-2 bg-yellow-100 
      text-sm placeholder:text-stone-400
      w-28 sm:w-64 sm:focus:w-72 transition-all duration-300
      focus:outline-none focus:ring-yellow-500
      focus:ring-opacity-50 focus:ring"
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
