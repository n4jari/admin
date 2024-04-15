import Card from "../ui/dashboard/card/page";
import Chart from "../ui/dashboard/chart/page";
import Transactions from "../ui/dashboard/transactions/page";
import RightBar from "../ui/dashboard/rightbar/page";
import Notices from "../ui/dashboard/notices/Notices";

const Dashboard = () => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-4 flex-col" style={{ flex: 3 }}>
        <div className="hidden max-lg:block">
          <Notices position="static" />
        </div>
        <div className="flex justify-between gap-4 max-sm:flex-col">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1 max-lg:hidden">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
