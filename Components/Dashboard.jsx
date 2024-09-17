import React from "react";
import Card from "./Card";

const Dashboard = () => {
  const data = [
    {
      heading: "Users",
      dets: "Total number of registered users",
      no: "1,234",
      icon: "ri-user-3-line text-4xl",
    },
    {
      heading: "Productivity",
      dets: "Average user productivity",
      no: "87%",
      icon: "ri-bar-chart-2-fill text-4xl",
    },
    {
        heading: "Attendance",
        dets: "Average user attendance",
        no: "92%",
        icon: "ri-check-double-line text-4xl",
      },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 w-[80%] px-14 place-items-center py-4 bg-transparent">
      {data?.map((i, index) => (
        <Card data={i} />
      ))}
    </div>
  );
};

export default Dashboard;
