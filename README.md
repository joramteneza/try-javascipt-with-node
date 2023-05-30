# try-javascipt-with-node

This is a simple Node.js project with a CRUD endpoint for managing todos.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/joram.teneza/try-javascipt-with-node.git

   ```

2. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

```shell
node index.js
```

The server will start running on port 3000.

### Endpoints

```bash
    GET /todos: Get all todos.
    POST /todos: Create a new todo.
    GET /todos/:id: Get a specific todo.
    PUT /todos/:id: Update a todo.
    DELETE /todos/:id: Delete a todo.
```

    For the POST and PUT requests, the request body should contain a JSON object representing the todo.

## Example Usage

Create a new todo

```bash
POST http://localhost:3000/todos
Content-Type: application/json

{
"id": 1,
"title": "Buy groceries"
}
```

Get all todos

```bash
GET http://localhost:3000/todos
```

Get a specific todo

```bash
GET http://localhost:3000/todos/1
```

Update a todo

```bash
PUT http://localhost:3000/todos/1
Content-Type: application/json

{
"id": 1,
"title": "Buy fruits"
}
```

Delete a todo

```bash
DELETE http://localhost:3000/todos/1
```

## License

This project is licensed under the MIT License.
