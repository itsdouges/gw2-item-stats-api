# gw2-item-stats-api

## `read`

`https://gw2-itemstats.netlify.com/.netlify/functions/read?id={statsId}&item={itemId}&lang={lang}`

### Query params

- id (item stats id)
- item (item id)
- lang (language)

Example usage:

```sh
curl https://gw2-itemstats.netlify.com/.netlify/functions/read?id=656&item=77482&lang=en
{"id":656,"name":"Cleric's","attributes":[]}
```

## `bulk_read`

### Query params

- lang (language)

### Body

`https://gw2-itemstats.netlify.com/.netlify/functions/bulk_read?lang={lang}`

Array of items.

```json
[
  {
    "calculatedId": "806481379", // itemId+id
    "id": 1379, // stats id
    "itemId": 80648, // item id
    "type": "Coat", // type of item
    "rarity": "Ascended", // rarity of item
    "level": 80 // level of item
  }
]
```

Example usage:

```sh
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"calculatedId": "806481379","id": 1379,"itemId": 80648,"type": "Coat","rarity": "Ascended","level": 80}' \
  https://gw2-itemstats.netlify.com/.netlify/functions/bulk_read?lang=en
```
