import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import Task3 from "../Task3";

describe("Task3 Component", () => {
    beforeEach(() => {
        render(<Task3 />);
    });

    test("renders input field and submit button", () => {
        expect(screen.getByPlaceholderText(/enter name/i)).toBeDefined();
        expect(screen.getByRole("button", { name: /submit/i })).toBeDefined();
    });

    test("validates input length", () => {
        const input = screen.getByPlaceholderText(/enter name/i);
        fireEvent.change(input, { target: { value: "Ba" } });
        expect(screen.getByText(/name must be at least 3 characters long/i)).toBeDefined();
    });

    test("adds valid name to the list", () => {
        const input = screen.getByPlaceholderText(/enter name/i);
        const button = screen.getByRole("button", { name: /submit/i });

        fireEvent.change(input, { target: { value: "Rusty" } });
        fireEvent.click(button);

        expect(screen.getByText("Rusty")).toBeDefined();
    });

    test("prevents duplicate names", () => {
        const input = screen.getByPlaceholderText(/enter name/i);
        const button = screen.getByRole("button", { name: /submit/i });

        fireEvent.change(input, { target: { value: "Rusty" } });
        fireEvent.click(button);
        fireEvent.change(input, { target: { value: "Rusty" } });
        fireEvent.click(button);

        expect(screen.getAllByText("Rusty")).toHaveLength(1);
        expect(screen.getByText(/name already exists/i)).toBeDefined();
    });

});