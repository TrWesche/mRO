import express from "express";
import { PORT } from "./configEnv";
import { dbMain } from "./dbConnect";

const app = express();

app.get('/', (req, res) => res.send('Express + TypeScript Server is running'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});