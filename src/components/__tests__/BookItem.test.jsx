import { render, screen, fireEvent } from "@testing-library/react";
import BookItem from "./BookItem";

test("toggles description visibility when button is clicked", () => {
  render(<BookItem title="Test Book" description="Sample description" />);

  const toggleButton = screen.getByRole("button", { name: /show details/i });
  expect(screen.queryByText(/sample description/i)).toBeNull();

  fireEvent.click(toggleButton);
  expect(screen.getByText(/sample description/i)).toBeInTheDocument();

  fireEvent.click(toggleButton);
  expect(screen.queryByText(/sample description/i)).toBeNull();
});
