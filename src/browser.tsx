import { React, ReactDOM } from "https://unpkg.com/es-react@16.8.60/index.js";
import { App } from "./http/get-index/app.tsx";

//entry point for deno.bundle() and client-side data call.
window.addEventListener("DOMContentLoaded", async () => {
  const raw = await fetch("/todos");
  const todos = await raw.json();
  //@ts-ignore
  let el = window.document.getElementById("app");
  //@ts-ignore
  ReactDOM.hydrate(<App data={todos} />, el);
});
