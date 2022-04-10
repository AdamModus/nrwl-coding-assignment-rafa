import { Ticket } from "../../backend";
import EditableCard from "./EditableCard/EditableCard";
import FilledCard from "./FilledCard/FilledCard";
import ToAddCard from "./ToAddCard/ToAddCard";

interface IProps {
  ticket?: Ticket;
  editMode?: boolean;
}

const Card = ({ ticket, editMode = false }: IProps) => {
  if (!ticket) {
    // No ticket data, so this is a card to add a new ticket
    return <ToAddCard />;
  }

  if (ticket && editMode) {
    // Ticket data and in edit mode, so it is a card to edit the ticket
    return <EditableCard ticket={ticket} />;
  }

  // If there is ticket data and is not in edit mode, it is a card to view the ticket
  return <FilledCard ticket={ticket} />;
};

export default Card;
