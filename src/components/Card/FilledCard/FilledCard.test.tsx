import { fireEvent, render } from "@testing-library/react";
import { Ticket } from "../../../backend";
import { default as FilledCard } from "./FilledCard";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Card component", () => {
  it("renders ticket data", () => {
    // Arrange
    const ticket: Ticket = {
      id: 1,
      description: "Some description",
      completed: false,
      assigneeId: null,
    };
    const expectedIdText = "Ticket 1";
    const expectedCompletedText = "Not completed";

    // Act
    const { getByText } = render(<FilledCard ticket={ticket} />);

    // Assert
    expect(getByText(expectedIdText)).toBeInTheDocument();
    expect(getByText(ticket.description)).toBeInTheDocument();
    expect(getByText(expectedCompletedText)).toBeInTheDocument();
  });

  it("navigates to ticket details view when edit ticket button is clicked", () => {
    // Arrange
    const ticket: Ticket = {
      id: 1,
      description: "Some description",
      completed: true,
      assigneeId: null,
    };

    // Act
    const { getByText } = render(<FilledCard ticket={ticket} />);
    fireEvent.click(getByText("Edit ticket"));

    // Assert
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/details/" + ticket.id);
  });
});
