import memoize from "memoizee";

async function itemStats(id, lang) {
  const response = await axios.get(`${config.gw2.endpoint}v2/itemstats/${id}`, {
    params: {
      lang
    }
  });
  return response.data;
}

export const readItemStats = memoize(itemStats, {
  promise: true,
  preFetch: true,
  maxAge: config.cache.itemStats
});
