const memoize = require("memoizee");

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
  maxAge: config.cache.itemStats
});

module.exports = { readItemStats };
