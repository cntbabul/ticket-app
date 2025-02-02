import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 ">
        <PriorityDisplay Priority={ticket.Priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4> {ticket.Title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Ticket Description</p>
      <div className="flex-grow ">
        <div>
          <p className="text-xs my-1">{ticket.reatedAt}</p>
        </div>
        <div className="ml-auto flex items-end justify-center align-middle space-x-2">
          <ProgressDisplay progress={ticket.Progress} />
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
