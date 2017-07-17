## Overview
Sung-Merge-JSON merges two JSONs

## Specs
* It merges two JSONs in multiple depth of Objecs
* When each JSON has the value on a samy key, it takes the value from the first JSON
* Array will be treated as a value. Array will be overrided with the value in the first JSON Object
* You can use it when you need to add up the default values into the user input data

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
var sung_merge_json = require('sung-merge-json')
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
			"lovers": ["ping", "ching"]
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
			"lovers": ["mi", "mom"]
		}
	}
}
```

Execute the module
```
var result = sung_merge_json(user_input_data, default_values)
```

Check the recult
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
     lovers: [ 'ping', 'ching' ],
     best: 'sung',
     others: [ 'song', 'pong' ] },
  favorite_music: 'pop' }
```

Array will be overrided with the value in the first JSON Object
```
console.log(result.aboutme.friends.lovers)
[ 'ping', 'ching' ]
```