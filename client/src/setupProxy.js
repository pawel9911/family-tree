const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function setupProxy(app) {
  const apiProxy = createProxyMiddleware({
    target: "http://localhost:5000",
    logLevel: "debug",
    onError(err, req, res) {
      console.error("Proxy error:", err.message);
      if (!res.headersSent) {
        res.status(500).send("Proxy error");
      }
    },
  });

  app.use(["/api", "/auth/google"], apiProxy);
};
