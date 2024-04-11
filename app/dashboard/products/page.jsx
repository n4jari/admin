import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className="p-4 bg-soft rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a product ..." />
        <Link href="/dashboard/products/add">
          <button className="py-1 px-2 text-sm font-medium bg-indigo-500 hover:bg-indigo-600 rounded-md border-none w-fit cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created at</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-full object-cover"
                  src="/noproduct.jpg"
                  width={40}
                  height={40}
                  alt=""
                />
                Amireza Najari
              </div>
            </td>
            <td >Desc</td>
            <td>$999</td>
            <td>13.04.2022</td>
            <td>72</td>
            <td>
              <div className="flex gap-2 py-1 px-2">
                <Link href="/dashboard/products/fakeProduct">
                  <button className="py-1 px-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 rounded-md border-none w-fit cursor-pointer">
                    View
                  </button>
                </Link>
                <button className="py-1 px-2 text-sm font-medium bg-red-500 hover:bg-red-600 rounded-md border-none w-fit cursor-pointer">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
