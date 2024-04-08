import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-1 rounded-md px-2 py-1 bg-active-sidebar">
      <MdSearch />
      <input
        className="bg-transparent text-xs p-1 outline-none border-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
