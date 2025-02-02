import React from "react";
import TicketCard from "./(components)/TicketCard";
const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
    console.log(res.json());
  } catch (error) {
    console.log("failed to fetch tickets", error);
  }
};
console.log(getTickets());
const Dashboard = () => {
  const { tickets } = getTickets();
  const uniqueCategories = [...new Set(tickets?.map((category) => category))];
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard id={_index} key={_index} ticket={tickets} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
