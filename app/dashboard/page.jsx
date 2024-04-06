import React from "react";
import Card from "../ui/dashboard/card/page";
import Chart from "../ui/dashboard/chart/page";
import Transactions from "../ui/dashboard/transactions/page";
import RightBar from "../ui/dashboard/rightbar/page";

const Dashboard = () => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-20 flex-col" style={{ flex: 3 }}>
        <div className="flex justify-between gap-4">
          <Card />
          <Card />
          <Card />
        </div>
        <Chart />
        <Transactions />
      </div>
      <div className="flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
