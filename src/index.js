// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if (currency > 10000) {
		return { error: "You are rich, my friend! We don't have so much coins for exchange" };
	}
	
	var currencies = {
		"H":50,
		"Q":25,
		"D":10,
		"N":5,
		"P":1
	};

	var current = currency;
	var result = {};

	for(var key in currencies)
	{
		if(current >= currencies[key])
		{
			var value = Math.floor(current/currencies[key]);
			result[key] = value;
			current -= current - value*currencies[key];
		}
	}
	
	return result;
}
