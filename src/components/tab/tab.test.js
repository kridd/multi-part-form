import { render, screen } from "@testing-library/react";
import { Tab } from "./tab";

describe("Components | Tab", () => {
  test("renders default Tab", () => {
    render(<Tab label="test tab label" />);

    const tabElement = screen.getByText(/test tab label/i);

    expect(tabElement).toBeInTheDocument();
  });

  test("renders error state", () => {
    render(<Tab label="test tab label" erroring={true} />);

    const tabElement = screen.getByText(/test tab label/i);

    expect(tabElement).toBeInTheDocument();
    // TODO: This needs a little more thought than being directly tied to the className
    expect(tabElement).toHaveClass("bg-red-900");
  });

  test("renders active state", () => {
    render(<Tab label="test tab label" active={true} />);

    const tabElement = screen.getByText(/test tab label/i);

    expect(tabElement).toBeInTheDocument();
    expect(tabElement).toHaveClass("bg-gray-900");
  });
});
