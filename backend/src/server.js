import app from "./app.js";
import env from "./config/env.js";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`
=========================================
 DevSetup Doctor Server Started
 Environment : ${env.NODE_ENV}
 Port        : ${PORT}
=========================================
`);
});