import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { PAGES, headFor } from "./seo";
import "./index.css";

// In the browser: attach to the HTML that was prerendered at build time
// (or render from scratch in `npm run dev`, where nothing is prerendered).
if (typeof window !== "undefined") {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
}

// At build time: vite-prerender-plugin calls this once per route and writes
// the result to dist/<route>/index.html, so crawlers get real HTML.
export async function prerender({ url }: { url: string }) {
  const { renderToString } = await import("react-dom/server");
  const { StaticRouter } = await import("react-router-dom/server");

  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );

  return {
    html,
    links: new Set(Object.keys(PAGES)),
    head: headFor(url),
  };
}
