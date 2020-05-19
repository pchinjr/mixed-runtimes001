import React from "https://unpkg.com/es-react";
import { List } from "./list.tsx";

type Props = {
  data: object[];
};

//function component
export function App(todos: Props) {
  return (
    <div>
      <h1>todeno 🦕</h1>
      <form action="/todos" method="POST">
        <input name="text" type="text" placeholder="praise cage" />
      </form>
      <List todos={todos.data} />
    </div>
  );
}
