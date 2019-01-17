const config = {
  coinUnits: 100000000,
  coinDecimalPlaces: 4,
  symbol: 'TMY'
};

function getCoinDecimalPlaces() {
    if (typeof coinDecimalPlaces != "undefined") return coinDecimalPlaces;
    else if (config.coinDecimalPlaces) return config.coinDecimalPlaces;
    else config.coinUnits.toString().length - 1;
}

function getReadableCoins(coins, digits, withoutSymbol){
    var coinDecimalPlaces = getCoinDecimalPlaces();
    var amount = parseFloat((parseInt(coins || 0) / config.coinUnits).toFixed(digits || coinDecimalPlaces));
    return amount.toString() + (withoutSymbol ? '' : (' ' + config.symbol));
}

HELPERS = {
  getReadableCoins,

  minus(a, b) {
    return (a - b);
  },

  isEqual(a, b) {
    return _.isEqual(a, b)
  },

  console(a) {
    return console.log(a);
  },

  formatTimestamp(timestamp) {
    const date = moment(timestamp*1000);
    return `${date.format('MM/DD/YYYY, hh:mm:ss')} ${date.fromNow()}`
  }
}

_.each(HELPERS, function (fn, name) {
	return Template.registerHelper(name, fn);
});
