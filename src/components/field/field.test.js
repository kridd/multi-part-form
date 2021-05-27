import { render, screen } from "@testing-library/react";
import { RawField } from "./field";

describe("Components | Form", () => {
  test.todo("throws a warning when required props are missing");

  test("renders default Field", () => {
    render(<RawField label="test field label" type="checkbox" />);

    const label = screen.getByText(/test field label/i);
    const input = screen.getByLabelText(/test field label/i);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("renders errors", () => {
    render(
      <RawField label="test field label" error="This field is erroring" />
    );

    const errorMessage = screen.getByText(/This field is erroring/i);
    const input = screen.getByLabelText(/test field label/i);

    expect(errorMessage).toBeInTheDocument();
    // TODO: This needs a little more thought than being directly tied to the className
    expect(input).toHaveClass("border-red-900");
  });

  test("renders non-text inputs", () => {
    render(<RawField label="test field label" type="checkbox" />);

    const input = screen.getByRole("checkbox");
    expect(input).toBeInTheDocument();
  });
});
