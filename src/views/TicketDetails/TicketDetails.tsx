import { Typography } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { Card } from "../../components";
import { useAppContext } from "../../context/AppContextManager";

const TicketDetails = () => {
  const { tickets } = useAppContext();
  const { ticketId } = useParams();
  const id = parseInt(ticketId || "nope");

  if (isNaN(id)) {
    return <Navigate replace to="/" />;
  }

  const currTicket = tickets.find((ticket) => ticket.id === id);

  if (!currTicket) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <Typography variant="h4" component="div">
        Ticket details!
      </Typography>
      <Card ticket={currTicket} editMode={true} />
    </>
  );
};

export default TicketDetails;
