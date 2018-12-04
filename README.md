# Steps to reproduce the issue

* run `npm install`
* run `node .`
* open url `http://localhost:3000/explorer`
* click on the resource `Member` and expand `/members/login`
* fill `credentials` parameter with:

```
{
"email": "antonio.trapani@gmail.com",
"password": "password"
}
```

* press `Try it out!`
* set the token using the given `id`
* expand `/members/{id}`
* insert the number 1 into the `id` field
* press `Try it out!`
* you get 401 instead of 200
