import React from "https://unpkg.com/es-react";

// type definition for react elements
// https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking
declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
      pre: any;
      div: any;
      li: any;
      form: any;
      input: any;
      button: any;
      h1: any;
      ul: any;
    }
  }
}

type Props = {
  todos: object[];
};

export function List(todos: Props) {
  let arr: any = Object.values(todos);
  console.log(arr[0].todos);
  let todoArr = arr[0].todos;

  if (arr[0].todos.length === 0) {
    return <li>add a todeno</li>;
  } else {
    //@ts-ignore
    let list = todoArr.map((t) => renderTodo(t));
    //@ts-ignore
    function renderTodo(t) {
      let text = t.text;
      let id = t.key;
      return (
        <li>
          {text}
          <form action="/todos/delete" method="POST">
            <input type="hidden" name="key" value={id} />
            <button>Nevermind</button>
          </form>
        </li>
      );
    }
    return list;
  }
}
