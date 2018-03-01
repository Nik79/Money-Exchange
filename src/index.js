// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if (currency <= 0) {
		return {};
	}

	if (currency > 10000) {
		return { error: "You are rich, my friend! We don't have so much coins for exchange" };
	}
	var hResult;
	var qResult;
	var dResult;
	var nResult;
	var pResult;

	var result = {};


	hResult = CalculateCoins(currency);

	if (hResult != undefined) {
		result.H = hResult[1];
		qResult = CalculateCoins(hResult[2]);
	}

	if (qResult != undefined) {
		result.Q = qResult[1];
		dResult = CalculateCoins(qResult[2]);
	}

	if (dResult != undefined) {
		result.D = dResult[1];
		nResult = CalculateCoins(dResult[2]);
	}

	if (nResult != undefined) {
		result.N = nResult[1];
		pResult = CalculateCoins(nResult[2]);
	}

	if (pResult != undefined) {
		result.P = pResult[1];
	}

	return result;
}

function CalculationHelper(amount, dividor, dividorName) {
	if (amount >= dividor) {
		var rest = amount % dividor;
		var coins = (amount - rest) / dividor;

		return [dividorName, coins, rest];
	} else {
		return undefined;
	}
}

function CalculateCoins(amount) {

	if (amount >= 50) {
		return CalculationHelper(amount, 50, "H");
	}

	if (amount >= 25) {
		return CalculationHelper(amount, 25, "Q");
	}

	if (amount >= 10) {
		return CalculationHelper(amount, 10, "D");
	}

	if (amount >= 5) {
		return CalculationHelper(amount, 5, "N");
	}

	if (amount >= 1) {
		return CalculationHelper(amount, 1, "P");
	}

	return undefined;
}
