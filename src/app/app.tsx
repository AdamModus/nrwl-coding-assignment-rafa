import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "../context/AppContextManager";
import { Main, TicketDetails } from "../views";
import "./app.css";

const App = () => {
  const { fetchData } = useAppContext();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:ticketId" element={<TicketDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
