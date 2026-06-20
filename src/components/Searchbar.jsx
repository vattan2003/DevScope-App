import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    onSearch(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 justify-center"
    >
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full md:w-[450px] p-4 rounded-xl border border-gray-300 outline-none"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 transition"
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default Searchbar;