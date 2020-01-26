const memoize = require("memoizee");
const axios = require("axios");

async function itemStats(id, lang) {
  const response = await axios.get(
    `https://api.guildwars2.com/v2/itemstats/${id}`,
    {
      params: {
        lang
      }
    }
  );
  return response.data;
}

const readItemStats = memoize(itemStats, {
  promise: true,
  preFetch: true,
  maxAge: 86400000
});

module.exports = { readItemStats };
