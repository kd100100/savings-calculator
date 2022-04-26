import { fireEvent, render, screen } from "@testing-library/react";
import Options from "../index";

test("should have default values in form", () => {
	render(<Options currency="INR" />);

	const currencyOptions = screen.getByTestId("currency-inr");
	const startingBalance = screen.getByPlaceholderText(
		"Enter initial balance"
	);
	const monthlyContribution = screen.getByPlaceholderText(
		"Enter monthly contribution"
	);
	const period = screen.getByPlaceholderText("Enter period of contribution");
	const periodChoice = screen.getByLabelText("Years");
	const annualInterest = screen.getByPlaceholderText(
		"Enter interest rate per annum"
	);

	expect(currencyOptions).toHaveClass("currency-option-selected");
	expect(startingBalance).toHaveValue(1000);
	expect(monthlyContribution).toHaveValue(100);
	expect(period).toHaveValue(1);
	expect(periodChoice).toBeChecked();
	expect(annualInterest).toHaveValue(8);
});

test("should return total amount", () => {
	var total;
	const setTotal = (result) => {
		total = result;
	};

	render(<Options setTotal={setTotal} currency="INR" />);

	const calculateButton = screen.getByRole("button", { name: /Calculate/i });
	fireEvent.click(calculateButton);

	expect(total).toBe(2327);
});
