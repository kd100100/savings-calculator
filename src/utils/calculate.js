export const calculateTotal = (savingOptions) => {
	const {
		startingBalance,
		monthlyContribution,
		period,
		periodChoice,
		annualInterest,
	} = savingOptions;

	let total = parseFloat(startingBalance);
	let monthlyInterest = parseFloat(annualInterest) / 12;
	let monthlyInterestPaid = 0;
	let periodInMonths =
		periodChoice === "Years" ? parseFloat(period) * 12 : parseFloat(period);
	let monthlyContributionAmount = parseFloat(monthlyContribution);

	for (let i = 0; i < periodInMonths; i++) {
		monthlyInterestPaid = total * (monthlyInterest / 100);
		total = total + monthlyContributionAmount + monthlyInterestPaid;
	}

	total = parseInt(total);

	return total;
};
