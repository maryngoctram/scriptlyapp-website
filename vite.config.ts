import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const server = {
    host: "::",
    port: 8080,
  };

  return {
    server,
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      // Renders every route to static HTML at build time (see prerender() in src/main.tsx).
      // /404.html is the not-found page Vercel serves, with a 404 status, for unknown URLs.
      vitePrerenderPlugin({ renderTarget: "#root", additionalPrerenderRoutes: ["/404.html"] }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "esnext",
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-tooltip"],
          },
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "lucide-react"],
    },
  };
});
