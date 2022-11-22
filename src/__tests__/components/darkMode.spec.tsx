import { DarkMode } from "../../components/darkMode/darkMode";
import { render, fireEvent } from "@testing-library/react";
let theme = "light";
let toggleColorMode = jest.fn();
jest.mock("@chakra-ui/react", () => {
  return {
    useColorMode: () => ({
      colorMode: theme,
      toggleColorMode: toggleColorMode,
    }),
  };
});
describe("darkMode.tsx", () => {
  it("should render", () => {
    const { container } = render(<DarkMode />);
    expect(container).toBeInTheDocument();
  });
  it("should render dark mode", () => {
    const { getByTestId } = render(<DarkMode />);
    expect(getByTestId("moon")).toBeInTheDocument();
  });
  it("should render light mode", () => {
    theme = "dark";
    const { getByTestId } = render(<DarkMode />);
    expect(getByTestId("sun")).toBeInTheDocument();
  });
  it("should turn to light mode", () => {
    theme = "dark";
    const { getByTestId } = render(<DarkMode />);
    fireEvent.click(getByTestId("sun"));
    expect(toggleColorMode).toHaveBeenCalled();
  });
  it("should turn to dark mode", () => {
    theme = "light";
    const { getByTestId } = render(<DarkMode />);
    fireEvent.click(getByTestId("moon"));
    expect(toggleColorMode).toHaveBeenCalled();
  });
});
