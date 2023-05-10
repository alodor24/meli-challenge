import app from "./app";
import router from "./routes";

import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

app.use("/api/", router);

app.use((_req, res) => {
  res.status(404).send({ error: "Ups! Solicitud no encontrada" });
});
