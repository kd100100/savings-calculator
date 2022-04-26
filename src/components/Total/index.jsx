import React from "react";
import PiggyBank from "../../assets/images/piggy-bank.png";

function Total({ total, currency }) {
	return (
		<div className="total">
			<img src={PiggyBank} alt="piggy-bank" />
			<div className="end-balance">
				<h3>End Balance:</h3>
				<h1>
					{currency === "INR" ? "₹" : "$"}
					{total}
				</h1>
			</div>
		</div>
	);
}

export default Total;
