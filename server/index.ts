import next from "next";
import { createServer } from "http";

const isDev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "5000", 10);
const hostname = "0.0.0.0";

const app = next({ dev: isDev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  server.listen(port, hostname, () => {
    console.log(`> Next.js ready on http://${hostname}:${port}`);
  });
});
