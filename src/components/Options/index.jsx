import React, { useState } from "react";
import { calculateTotal } from "../../utils/calculate";

function Options({ setTotal, currency, setCurrency }) {
	const [startingBalance, setStartingBalance] = useState(1000);
	const [monthlyContribution, setMonthlyContribution] = useState(100);
	const [period, setPeriod] = useState(1);
	const [periodChoice, setPeriodChoice] = useState("Years");
	const [annualInterest, setAnnualInterest] = useState(8);

	console.log(currency === "INR");

	const handleSubmit = (event) => {
		event.preventDefault();

		const total = calculateTotal({
			startingBalance,
			monthlyContribution,
			period,
			periodChoice,
			annualInterest,
		});

		setTotal(total);
	};

	return (
		<div className="options">
			<div className="currency-options">
				<div
					className={`currency ${
						currency === "INR" ? "currency-option-selected" : ""
					}`}
					onClick={() => setCurrency("INR")}
					data-testid="currency-inr"
				>
					<h4>INR</h4>
				</div>
				<div
					className={`currency ${
						currency === "USD" ? "currency-option-selected" : ""
					}`}
					onClick={() => setCurrency("USD")}
					data-testid="currency-usd"
				>
					<h4>USD</h4>
				</div>
			</div>
			<form>
				<div className="form-group">
					<label htmlFor="starting-balance">Starting Balance:</label>
					<div className="input-group">
						<div className="input-group-prepend">
							{currency === "INR" ? "₹" : "$"}
						</div>
						<input
							type="number"
							className="form-control"
							id="starting-balance"
							placeholder="Enter initial balance"
							value={startingBalance}
							onChange={(e) => setStartingBalance(e.target.value)}
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="monthly-contribution">
						Monthly Contribution:
					</label>
					<div className="input-group">
						<div className="input-group-prepend">
							{currency === "INR" ? "₹" : "$"}
						</div>
						<input
							type="number"
							className="form-control"
							id="monthly-contribution"
							placeholder="Enter monthly contribution"
							value={monthlyContribution}
							onChange={(e) =>
								setMonthlyContribution(e.target.value)
							}
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="period">Period:</label>
					<div className="input-group">
						<input
							type="number"
							className="form-control"
							id="period"
							placeholder="Enter period of contribution"
							value={period}
							onChange={(e) => setPeriod(e.target.value)}
						/>
					</div>
				</div>
				<div className="period-choice">
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="period-choice"
							id="period-choice-years"
							value="years"
							defaultChecked
							onChange={() => setPeriodChoice("Years")}
						/>
						<label
							className="form-check-label"
							htmlFor="period-choice-years"
						>
							Years
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="period-choice"
							id="period-choice-months"
							value="months"
							onChange={() => setPeriodChoice("Months")}
						/>
						<label
							className="form-check-label"
							htmlFor="period-choice-months"
						>
							Months
						</label>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="annual-interest-rate">
						Annual Interest Rate (%):
					</label>
					<div className="input-group">
						<input
							type="number"
							className="form-control"
							id="annual-interest-rate"
							placeholder="Enter interest rate per annum"
							value={annualInterest}
							onChange={(e) => setAnnualInterest(e.target.value)}
						/>
					</div>
				</div>
				<button
					type="submit"
					className="calculate-button"
					onClick={handleSubmit}
				>
					Calculate Total
				</button>
			</form>
		</div>
	);
}

export default Options;
