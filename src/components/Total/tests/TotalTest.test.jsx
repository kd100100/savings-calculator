import { render, screen } from "@testing-library/react";
import Total from "../index";

test("should display total amount sent in props", () => {
	const total = 1000;
	render(<Total total={total} />);

	const totalElement = screen.getByText(/₹/);

	expect(totalElement).toHaveTextContent(total);
});
