import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

function renderWithTheme(ui) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

test("renders portfolio with View Projects CTA", () => {
  renderWithTheme(<App />);
  const cta = screen.getByRole("link", { name: /view projects/i });
  expect(cta).toBeInTheDocument();
});
