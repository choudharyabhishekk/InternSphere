import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Signup from "./Signup";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

describe("Signup", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  });

  it("renders the signup form", () => {
    expect(screen.getByText(/Create an account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign Up/i })
    ).toBeInTheDocument();
  });

  it("validates name input", async () => {
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
  });

  it("validates email input", async () => {
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
  });

  it("validates password input", async () => {
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "short" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(
      await screen.findByText(/Password must be at least 8 characters long/i)
    ).toBeInTheDocument();
  });

  it("validates confirm password input", async () => {
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "Password1!" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "DifferentPassword1!" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(
      await screen.findByText(/Passwords do not match/i)
    ).toBeInTheDocument();
  });

  it("submits the form successfully", async () => {
    axios.post.mockResolvedValueOnce({ data: {} });
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "Password1!" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "Password1!" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    await waitFor(() =>
      expect(screen.getByText(/Create an account/i)).toBeInTheDocument()
    );
  });

  it("handles signup failure", async () => {
    axios.post.mockRejectedValueOnce({
      response: { data: { message: "Signup failed" } },
    });
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "Password1!" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "Password1!" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(await screen.findByText(/Signup failed/i)).toBeInTheDocument();
  });
});
