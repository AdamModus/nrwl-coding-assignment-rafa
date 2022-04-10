import { render } from "@testing-library/react";
import { AppContext, AppContextProvider } from "./AppContextManager";

describe("App context manager", () => {
  it("sets default values", () => {
    // Arrange
    let mockedBackendRef: any = {};

    // Act
    const { getByText } = render(
      <AppContextProvider backendRef={mockedBackendRef}>
        <AppContext.Consumer>
          {(value) => (
            <>
              <span>isLoading: {value?.isLoading.toString()}</span>
              <span>tickets: {value?.tickets.toString()}</span>
              <span>users: {value?.users.toString()}</span>
            </>
          )}
        </AppContext.Consumer>
      </AppContextProvider>
    );

    // Assert
    expect(getByText("isLoading: false")).toBeTruthy();
    expect(getByText("tickets:")).toBeTruthy();
    expect(getByText("users:")).toBeTruthy();
  });
});
