const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mt-6 flex justify-center">
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default SearchBar;