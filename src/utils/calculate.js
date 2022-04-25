export const calculateTotal = (savingOptions) => {
	const {
		startingBalance,
		monthlyContribution,
		period,
		periodChoice,
		annualInterest,
	} = savingOptions;

	let total = startingBalance;
	let monthlyInterest = annualInterest / 12;
	let monthlyInterestPaid = 0;
	let periodInMonths = periodChoice === "Years" ? period * 12 : period;

	for (let i = 0; i < periodInMonths; i++) {
		monthlyInterestPaid = total * (monthlyInterest / 100);
		total = total + monthlyContribution + monthlyInterestPaid;
	}

	total = parseInt(total * 100) / 100;

	return total;
};
