## Init

```bash
$ yarn install
```

## Task 1

```bash
$ echo 'Hello World with ąć' | node ./to_hex.js
Hello World with ąć      | 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 77 69 74 68 20 c4 85 c4 87
```


## Task 2

```bash
$ yarn start:one
```

Try it:

```bash
$ curl -d '{"x": "Alollo", "o": {"a": 234}}' -H "Content-Type: application/json" -X POST  http://localhost:4200/api/data

{"x":"Alollo","o":{"a":234},"a":4}
```

```bash
$ curl -d '{"command": "shutdown"}' -H "Content-Type: application/json" -X POST  http://localhost:4200/api/data
{"command":"shutdown","a":5}
----
$ node simple.js
Server is running on port 4200
error Command failed with exit code 2.
$ 
```


## Task 3

```bash
$ yarn start:two
```

Try it:

```bash
curl http://localhost:4200/api/todos
curl http://localhost:4200/api/todos/24
```
