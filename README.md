## Overview
Sung-Merge-JSON merges two JSONs deeply inside the object

## Specs
* It merges two JSONs in multiple depth levels of the Object
* When both JSON has the value on a samy key, it takes the value from the first JSON
* Array will be treated as a value. Array will be overrided with the value in the first JSON Object
* You can use it when you need to add up the default values into the user input data
* Second values will be used only when the first values are undefined or null
* Define representative object to set the default values to the all items in array

## Install
```
npm install sung-merge-json
```

## Test
Open console
```
node -c
```

Import module
```
var merge = require('sung-merge-json')
```

Define two JSONs to merge
```
var user_input_data = {
	"name": "Sung",
	"city": null,
	"phone": "917-222-3333",
	"aboutme": {
		"favorite_food": "korean",
		"friends": {
			"second": "hong",
			"lovers": [
				{
					"name": "ping",
					"area": "NY"
				}, 
				{
					"name": "ching"
				}, 
				{
					"area": "San Francisco"
				}
			]
		}
	}
}
var default_values = {
	"name": "User Name",
	"city": "NYC",
	"email": "you@aol.com",
	"aboutme": {
		"favorite_food": "everything",
		"favorite_music": "pop",
		"friends": {
			"best": "sung",
			"others": ["song", "pong"],
			"lovers": [
				{
					"name": "My Lover",
					"area": "Her Place"
				}
			]
		}
	}
}
```

Execute the module
```
var result = merge(user_input_data, default_values)
```

Check the result
```
console.log(result)
{ name: 'Sung',
  city: 'NYC',
  phone: '917-222-3333',
  aboutme:
   { favorite_food: 'korean',
     friends:
      { second: 'hong',
        lovers: [Object],
        best: 'sung',
        others: [Object] },
     favorite_music: 'pop' },
  email: 'sol1000@hotmail.com' }
```

Every Object will be merged until the end of the JSON tree
```
console.log(result.aboutme)
{ favorite_food: 'korean',
  friends:
   { second: 'hong',
     lovers: [ [Object], [Object], [Object] ],
     best: 'sung',
     others: [ 'song', 'pong' ] },
  favorite_music: 'pop' }
```

Array will be overrided with the value in the first JSON Object
```
console.log(result.aboutme.friends.lovers)
[ { name: 'ping', area: 'NY' },
  { name: 'ching' },
  { area: 'San Francisco' } ]
```