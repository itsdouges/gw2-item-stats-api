# gw2-item-stats-api

## `read`

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

```
