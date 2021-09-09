// Library Imports
import express, { Request, Response, NextFunction} from "express";

// Helper Function Imports
import { ExpressError } from "../helpers/expressError";

// Model Imports
import { User } from "../models/user.model";


export const authRouter = express.Router({strict: true});

/** POST /user - Full Route: api/auth/user - auth/user: {email, password} => {token}
 *
 **/
authRouter.post("/testSuccess", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await User.testSuccess();

        if (!result) {
            throw new ExpressError("Query Failed in Process", 500);
        }

        return res.json({ "Result": result })
    } catch (error) {
        next(error)
    }
});

authRouter.post("/testError", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await User.testError();    
        return res.json({"Result": "How did it get here?"});
    } catch (error) {
        next(error);   
    }
});