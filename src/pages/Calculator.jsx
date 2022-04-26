import React, { useState } from "react";
import Total from "../components/Total";
import Options from "../components/Options";

function Calculator() {
	const [total, setTotal] = useState(2327);
	const [currency, setCurrency] = useState("INR");

	return (
		<div className="calculator">
			<Total total={total} currency={currency} />
			<Options
				setTotal={setTotal}
				currency={currency}
				setCurrency={setCurrency}
			/>
		</div>
	);
}

export default Calculator;
