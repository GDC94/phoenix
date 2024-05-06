import {http, HttpResponse} from "msw";

const handlers = [
  http.get("/api/todos", () => {
    return HttpResponse.json(
      {
        todos: [
          {
            id: 1,
            todo: "Do something nice for someone I care about",
            completed: true,
            userId: 26
          }
        ]
      },
      {status: 200}
    );
  })
];

export default handlers;
