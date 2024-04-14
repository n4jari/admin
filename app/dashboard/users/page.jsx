import { Suspense } from "react";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";

const Users = async ({ searchParams }) => {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="p-4 bg-soft rounded-md">
      <div className="flex items-center justify-between mb-4">
        <Suspense>
          <Search placeholder="Search for a user ..." />
        </Suspense>
        <Link href="/dashboard/users/add">
          <button className="py-1 px-2 text-sm font-medium bg-indigo-500 hover:bg-indigo-600 rounded-md border-none w-fit cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created at</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2">
                <div className="flex items-center gap-4">
                  <Image
                    className="rounded-full object-cover"
                    src={user.img || "/noavatar.png"}
                    width={40}
                    height={40}
                    alt="profile"
                  />
                  {user.username}
                </div>
              </td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.createdAt?.toString().slice(4, 16)}</td>
              <td className="py-2">{user.isAdmin ? "Admin" : "Client"}</td>
              <td className="py-2">{user.isActive ? "Active" : "Passive"}</td>
              <td className="py-2">
                <div className="flex gap-2 py-1 px-2">
                  <Link href={`/dashboard/users/${user.id}`}>
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

export default Users;
