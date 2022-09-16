import { describe, expect, it } from "vitest";
import { render, screen } from "../../utils/test-utils";
import Komponent from "./Komponent";

describe("Simple working test for Komponent", () => {
  it("has a text", () => {
    render(<Komponent tekst="tekst" />);
    expect(screen.getByText(/tekst/)).toBeDefined();
  });
});
