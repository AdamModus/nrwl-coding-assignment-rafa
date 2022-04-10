import { Skeleton, Typography } from "@mui/material";
import { Card } from "../../components";
import { useAppContext } from "../../context/AppContextManager";

const Main = () => {
  const { isLoading, tickets } = useAppContext();

  return (
    <>
      <Typography variant="h4" component="div">
        Super duper ticket management system
      </Typography>

      <Card></Card>

      {isLoading &&
        [...Array(3)].map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            animation="wave"
            height={106}
            sx={{ borderRadius: "4px", marginTop: "16px" }}
          />
        ))}
      {!isLoading &&
        tickets.length > 0 &&
        tickets.map((ticket) => <Card key={ticket.id} ticket={ticket} />)}
    </>
  );
};

export default Main;
