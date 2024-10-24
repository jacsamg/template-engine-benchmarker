import { createServer } from 'node:http';

export function getServer(engineName, htmlGetter, serverPort) {
  const server = createServer(async (req, res) => {
    const method = req.method;
    const url = new URL(`http://localhost:${serverPort}${req.url}`);
    const path = url.pathname;
    const sendStatusCode = (statusCode) => {
      res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
      res.end(statusCode.toString());
    };
    const sendHtml = (html) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    };

    if (method !== 'GET') {
      sendStatusCode(405);
      return;
    }

    if (path.includes('test-01')) {
      sendHtml(await htmlGetter.test01());
      return;
    }

    sendStatusCode(404);
  });

  server.listen(serverPort, () => {
    console.log(`Running: ${engineName}`);
  });

  return server;
}