import { Edit } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Ticket } from "../../../backend";

interface IProps {
  ticket: Ticket;
}

const FilledCard = ({ ticket }: IProps) => {
  const navigate = useNavigate();

  function navigateToTicketDetails() {
    navigate("/details/" + ticket.id);
  }

  return (
    <Card
      variant="outlined"
      sx={{
        marginTop: "16px",
      }}
    >
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h4" component="div" sx={{ color: "#1976d2" }}>
            Ticket {ticket.id}
          </Typography>
          <Typography variant="body1">{ticket.description}</Typography>
          <Typography variant="body1">
            {ticket.completed ? "Completed" : "Not completed"}
          </Typography>
        </div>

        <Button
          variant="contained"
          endIcon={<Edit />}
          onClick={navigateToTicketDetails}
        >
          Edit ticket
        </Button>
      </CardContent>
    </Card>
  );
};

export default FilledCard;
