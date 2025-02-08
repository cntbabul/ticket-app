"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({id}) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.log("Failed to delete ticket");
    }
    if (res.ok) {
      console.log("Ticket deleted");
      // window.location.reload();
      router.refresh();
    }
  }
  return (
    <FontAwesomeIcon
      icon={faX}
      color="#dc3545"
      className="text-red-accent hover:cursor-pointer hover:text-red-accent-hover"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
