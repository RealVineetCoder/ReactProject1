import React from "react";

const NavComponent = ({ values }) => {
  const data = [
    { name: "Tickets Due", Entry: 6 },
    { name: "Tickets", Entry: 6 },
    { name: "High Prority", Entry: 1 },
    { name: "Meetings", Entry: 1 },
    { name: "ARR", Entry: "$100,000" },
    { name: "Active Plays", Entry: 1 },
    { name: "Renewal Date", Entry: "05/25/2024" },
    { name: "Segment", Entry: "Enterprise" },
    { name: "Country", Entry: "USA" },
    { name: "Location", Entry: "Dallas, TX" },
    { name: "Time zone", Entry: "CST" },
    { name: "Account Access", Entry: "Open" },
  ];

  return (
    <>
      <div className='flex border' >
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between items-center py-5 px-10"
            >
              <h1 className="text-xs text-zinc-500 px-3 whitespace-nowrap">{item.name}</h1>
              <p className="mt-5 mb-5 font-bold">{item.Entry}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavComponent;
