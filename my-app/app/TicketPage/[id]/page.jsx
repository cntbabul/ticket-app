// "use client"
import TicketForm from "@/app/(components)/TicketForm";
import React from "react";
// import { useRouter } from "next/navigation";

const getTicketById = async (id) => {
  // if (id === "new") {
  //   const router = useRouter();
  //   router.push("/create-ticket");
  //   return;
  // }
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the ticket data to update");
  }
  return res.json();
};

const TicketPage = async({params}) => {
  // const EDITMODE = params._id === "new" ? false : true;
  let updateTicketData = {};
  // if (EDITMODE) {
  //   updateTicketData = await getTicketById(await params.id);
  //   updateTicketData = updateTicketData.foundTicket;
  // }else{
  //   updateTicketData = {
  //     _id: "new",
  //   }
  // }
  // console.log(updateTicketData);
  // console.log(params.id);

  return (
    <div>
      <TicketForm />
    </div>
  );
};

export default TicketPage;
