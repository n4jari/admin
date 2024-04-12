"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) params.set("q", e.target.value);
    else params.delete("q");
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center gap-1 rounded-md px-2 py-1 bg-active-sidebar">
      <MdSearch />
      <input
        className="bg-transparent text-xs p-1 outline-none border-none"
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
