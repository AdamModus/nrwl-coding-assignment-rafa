import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const mockedUseAppContext = { fetchData: jest.fn(), tickets: [] };
jest.mock("../context/AppContextManager", () => ({
  useAppContext: () => mockedUseAppContext,
}));

describe("App component", () => {
  it("Renders the app with the header", () => {
    // Arrange
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Act
    const header = getByText("Super duper ticket management system");

    // Assert
    expect(header).toBeInTheDocument();
  });
});
