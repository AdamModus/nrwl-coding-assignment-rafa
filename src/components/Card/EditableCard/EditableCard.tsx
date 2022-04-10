import { Check } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Card,
  CardContent,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Ticket } from "../../../backend";
import { useAppContext } from "../../../context/AppContextManager";

interface IProps {
  ticket: Ticket;
}

const EditableCard = ({ ticket }: IProps) => {
  const { isLoading, users, assignTicket, completeTicket } = useAppContext();
  const user = users.find((u) => u.id === ticket.assigneeId);

  function handleChangeAssignee(evt: SelectChangeEvent) {
    const newAssigneeId = parseInt(evt.target.value);
    assignTicket(ticket.id, newAssigneeId);
  }

  function handleComplete() {
    completeTicket(ticket.id);
  }

  return (
    <Card variant="outlined" sx={{ marginTop: "16px" }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h4" component="div" sx={{ color: "#1976d2" }}>
            Ticket {ticket.id}
          </Typography>
          <Typography variant="body1">{ticket.description}</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <Select
            autoWidth
            sx={{ marginRight: "16px" }}
            value={user?.id ? `${user.id}` : ""}
            onChange={handleChangeAssignee}
          >
            <MenuItem value="">
              <em>Ticket not assigned</em>
            </MenuItem>
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
          <LoadingButton
            variant="contained"
            endIcon={<Check />}
            loading={isLoading}
            disabled={ticket.completed}
            onClick={handleComplete}
          >
            {ticket.completed ? "Completed" : "Complete ticket"}
          </LoadingButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default EditableCard;
