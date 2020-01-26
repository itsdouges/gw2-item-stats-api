const calculateAttributes = require("./lib/gw2/itemstats");
const { readItemStats } = require("./lib/gw2");
const { allSettled } = require("./lib/promise");

export async function read(id, item, lang) {
  const itemStats = await readItemStats(id, lang);
  const attributes = calculateAttributes(item, itemStats);

  return {
    ...itemStats,
    attributes
  };
}

export async function bulkRead(items, lang) {
  const promises = items.map(item => readItemStats(item.id, lang));

  const stats = await allSettled(promises);
  const itemStats = stats.map(({ state, value }, index) => {
    if (state === "fulfilled") {
      return value;
    }

    return {
      id: items[index].id,
      error: value.message
    };
  });

  const calculatedItemStats = items.map((request, index) => {
    const itemStat = itemStats[index];
    if (itemStat.error) {
      return itemStat;
    }

    try {
      const attributes = calculateAttributes(request, itemStat);
      return {
        ...itemStat,
        attributes
      };
    } catch (e) {
      return {
        id: itemStat.id,
        error: e.message
      };
    }
  });

  return calculatedItemStats;
}
