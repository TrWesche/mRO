import express, {Request, Response, NextFunction, ErrorRequestHandler} from "express";
import { ExpressError } from "./app/helpers/expressError";
import { PORT } from "./configEnv";

import { authRouter } from "./app/routes/user.model";

export const app = express();


app.get('/', (req: Request, res: Response) => res.send('Express + TypeScript Server is running'));

app.use('/', authRouter);

/** 404 handler */
app.use(function(req, res, next) {
  const error = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(error);
});

/** general error handler */

app.use(function(error: ExpressError, req: Request, res: Response, next: NextFunction) {
  res.status(error.status || 500);
  // console.error(err.stack);

  return res.json({
    status: error.status,
    message: error.message
  });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});