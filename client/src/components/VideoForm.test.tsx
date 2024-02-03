// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// import VideoForm from "./VideoForm";

// describe("VideoForm", () => {
//   it("should render a button", () => {
//     render(<VideoForm />);

//     expect(screen.getByRole("button")).toBeInTheDocument();
//   });
// });

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import VideoForm from "./VideoForm";

describe("VideoForm", () => {
  it("should render form inputs", () => {
    render(<VideoForm />);

    expect(screen.getByPlaceholderText("Video title")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("YouTube video URL"),
    ).toBeInTheDocument();
  });

  it("should enable 'Add' button when the form is filled with valid data", () => {
    render(<VideoForm />);

    const titleInput = screen.getByPlaceholderText("Video title");
    const urlInput = screen.getByPlaceholderText("YouTube video URL");
    const addButton = screen.getByRole("button", { name: /add/i });

    userEvent.type(titleInput, "Sample Title");
    userEvent.type(urlInput, "https://www.youtube.com/watch?v=abc123");

    expect(addButton).not.toBeDisabled();
  });
});
