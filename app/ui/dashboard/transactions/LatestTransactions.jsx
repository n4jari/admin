import { fetchTransactions } from "@/app/lib/data";
import Image from "next/image";

const LatestTransactions = async () => {
  const { transactions } = await fetchTransactions();
  return (
    <div className="bg-soft rounded-md p-5 max-sm:text-sm">
      <h2 className="text-soft font-light mb-4">Latest Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .slice(transactions.length - 3, transactions.length)
              .map((transaction) => (
                <tr>
                  <td className="min-w-52 pr-4 py-2">
                    <div className="flex items-center gap-4">
                      <Image
                        className="rounded-full object-cover"
                        src={transaction?.img || "/noavatar.png"}
                        alt="profile"
                        width={40}
                        height={40}
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
                    {transaction.createdAt?.toString().slice(4, 16) ||
                      new Date().toString().slice(4, 16)}
                  </td>
                  <td className="min-w-40 pr-4 py-2">${transaction.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestTransactions;
