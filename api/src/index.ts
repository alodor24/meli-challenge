import app from "./app";
import router from "./routes";

import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});

app.get("/", (_req, res) => {
  res.redirect("/api");
});

app.use("/api/", router);

app.use(function (_req, res, _next) {
  res.status(404);
  res.send({ error: "Ups! Solicitud no encontrada" });
});
