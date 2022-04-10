import React, { useCallback, useContext, useState } from "react";
import { firstValueFrom } from "rxjs";
import { BackendService, Ticket, User } from "../backend";

type AppContextType = {
  isLoading: boolean;
  tickets: Ticket[];
  fetchData: () => Promise<void>;
  addTicket: (description: string) => void;
  setTickets: (tickets: Ticket[]) => void;
  assignTicket: (ticketId: number, userId: number) => void;
  completeTicket: (ticketId: number) => void;
  users: User[];
};

export const AppContext = React.createContext<AppContextType | null>(null);

export const AppContextProvider: React.FC<{ backendRef: BackendService }> = ({
  children,
  backendRef,
}) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const [BETickets, BEUsers] = await Promise.all([
      firstValueFrom(backendRef.tickets()),
      firstValueFrom(backendRef.users()),
    ]);

    setTickets(BETickets);
    setUsers(BEUsers);
    setIsLoading(false);
  }, [backendRef]);

  const addTicket = async (description: string) => {
    setIsLoading(true);
    await firstValueFrom(backendRef.newTicket({ description }));
    setIsLoading(false);
  };

  const assignTicket = async (ticketId: number, userId: number) => {
    setIsLoading(true);
    await firstValueFrom(backendRef.assign(ticketId, userId));
    setIsLoading(false);
  };

  const completeTicket = async (ticketId: number) => {
    setIsLoading(true);
    await firstValueFrom(backendRef.complete(ticketId));
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        tickets,
        fetchData,
        setTickets,
        addTicket,
        assignTicket,
        completeTicket,
        users,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context == null) {
    throw new Error(
      `You forgot to wrap your component in <${AppContext.displayName}.Provider>.`
    );
  }
  return context;
};
