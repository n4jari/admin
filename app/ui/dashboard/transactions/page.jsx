import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-soft rounded-md p-5">
      <h2 className="text-soft font-light mb-4">Latest Transactions</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-full object-cover"
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Amireza Najari
              </div>
            </td>
            <td className="rounded-md text-sm p-1 text-green-500">Done</td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center gap-4 text-">
                <Image
                  className="rounded-full object-cover"
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Amireza Najari
              </div>
            </td>
            <td className="rounded-md text-sm p-1 text-red-500">Cancell</td>

            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center gap-4 text-">
                <Image
                  className="rounded-full object-cover"
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Amireza Najari
              </div>
            </td>
            <td className="rounded-md text-sm p-1 text-yellow-500">Pending</td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
