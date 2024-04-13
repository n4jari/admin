import { fetchProducts } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const Products = async ({ searchParams }) => {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { products, count } = await fetchProducts(q, page);

  return (
    <div className="p-4 bg-soft rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Suspense>
          <Search placeholder="Search for a product ..." />
        </Suspense>
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
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-2">
                <div className="flex items-center gap-4">
                  <Image
                    className="rounded-full object-cover"
                    src={product.img || "/noproduct.jpg"}
                    width={40}
                    height={40}
                    alt={product.title}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().splice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex gap-2 py-1 px-2">
                  <Link href={`/dashboard/products/${product.id}`}>
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
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Products;
