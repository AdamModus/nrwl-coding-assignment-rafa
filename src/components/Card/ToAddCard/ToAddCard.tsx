import { Add } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";
import { useAppContext } from "../../../context/AppContextManager";

const ToAddCard = () => {
  const { addTicket, isLoading } = useAppContext();
  const [description, setDescription] = useState("");

  function handleDescriptionChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setDescription(evt.target.value);
  }

  async function handleAddTicket() {
    if (description.trim().length === 0) {
      return;
    }
    await addTicket(description);
    setDescription("");
  }

  return (
    <Card variant="outlined" sx={{ marginTop: "16px" }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
        />

        <LoadingButton
          variant="contained"
          loading={isLoading}
          onClick={handleAddTicket}
        >
          <Add />
        </LoadingButton>
      </CardContent>
    </Card>
  );
};

export default ToAddCard;
