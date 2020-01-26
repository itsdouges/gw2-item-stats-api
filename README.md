# gw2-item-stats-api

## `read`

`https://gw2-itemstats.netlify.com/.netlify/functions/read?id={statsId}&item={itemId}&lang={lang}`

### Query params

- id (item stats id)
- item (item id)
- lang (language)

Example usage:

```sh
$ curl https://gw2-itemstats.netlify.com/.netlify/functions/read?id=656&item=77482&lang=en
{"id":656,"name":"Cleric's","attributes":[]}
```

## `bulk_read`

### Query params

- lang (language)

### Body

`https://gw2-itemstats.netlify.com/.netlify/functions/bulk_read?lang={lang}`

Array of items.

- calculatedId = `itemId + id`

```json
[
  {
    "calculatedId": "806481379",
    "id": 1379,
    "itemId": 80648,
    "type": "Coat",
    "rarity": "Ascended",
    "level": 80
  }
]
```

Example usage:

```sh
$ curl --header "Content-Type: application/json" \
  --request POST \
  --data '[{"calculatedId": "806481379","id": 1379,"itemId": 80648,"type": "Coat","rarity": "Ascended","level": 80}]' \
  https://gw2-itemstats.netlify.com/.netlify/functions/bulk_read?lang=en
[{"id":1379,"name":"Grieving","attributes":[{"attribute":"Power","modifier":121},{"attribute":"Precision","modifier":67},{"attribute":"CritDamage","modifier":67},{"attribute":"ConditionDamage","modifier":121}]}]
```
