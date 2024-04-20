import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import { Suspense } from "react";

const Transactions = () => {
  return (
    <div>
      <div>
        <Suspense>
          <Search placeholder="Search for a transaction ..." />
        </Suspense>
        <Link href="/dashboard/transactions/add">
          <button>Add New</button>
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amireza Najari</td>
              <td>Done</td>
              <td>{new Date().toDateString().split(0, 16)}</td>
              <td>32$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
