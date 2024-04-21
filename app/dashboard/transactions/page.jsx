import { fetchTransactions } from "@/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import { Suspense } from "react";

const Transactions = async ({ searchParams }) => {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { count, transactions } = await fetchTransactions(q, page);

  return (
    <div className="bg-soft p-4 rounded-md max-sm:text-sm">
      <div className="flex items-center justify-between mb-4">
        <Suspense>
          <Search placeholder="Search for a user ..." />
        </Suspense>
      </div>
      <div className="overflow-x-auto ">
        <table className="text-left w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr>
                <td className="min-w-52 pr-4 py-2">
                  <div className="flex  items-center gap-4">
                    <Image
                      className="rounded-full object-cover"
                      src={transaction?.img || "/noavatar.png"}
                      width={40}
                      height={40}
                      alt="profile"
                    />
                    {transaction.username}
                  </div>
                </td>
                <td
                  className={`min-w-40 pr-4 py-2 ${
                    transaction.status === "Done"
                      ? "text-green-500"
                      : transaction.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.status}
                </td>
                <td className="min-w-40 pr-4 py-2">
                  {transaction.createdAt?.toString().slice(4, 16)}
                </td>
                <td className="min-w-40 py-2">{transaction.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination count={count} />
    </div>
  );
};

export default Transactions;
