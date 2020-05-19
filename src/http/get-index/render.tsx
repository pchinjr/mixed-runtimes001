import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
import { React } from "https://unpkg.com/es-react";
import { App } from "./app.tsx";

// server-side render call renderToString
export async function render() {
  const env = Deno.env.toObject();
  let stage;
  if (env.NODE_ENV === "staging") {
    stage = "https://invent-jf9-staging.begin.app";
  }
  if (env.NODE_ENV === "production") stage = "https://invent-jf9.begin.app";
  if (env.NODE_ENV === "testing") stage = "http://localhost:3333";
  let url = `${stage}/todos`;
  const raw = await fetch(url);
  const todos = await raw.json();
  //@ts-ignore
  let body = ReactDOMServer.renderToString(<App data={todos} />);

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Todenow or Never</title>
  </head>
  <style> * { margin-left: 5px } </style>
  <body>      
    <div id="app">${body}</div>
    <script type="module" src=/_static/browser.js></script>
  </body>
  </html>
  `;
}
