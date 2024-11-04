import adapter from "@hono/vite-dev-server/cloudflare";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
    };
  } else {
    return {
      plugins: [
        honox({
          devServer: {
            adapter,
          },
        }),
        pages(),
      ],
    };
  }
});