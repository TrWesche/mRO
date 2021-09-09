// const bcrypt = require('bcrypt');
// const { BCRYPT_WORK_FACTOR } = require("../config");
// const ExpressError = require("../helpers/expressError");
import { ExpressError } from "../helpers/expressError";

import {
    begin_transaction, 
    commit_transaction, 
    rollback_transaction 
} from "../repositories/coreQueries/common.repo";


/** Standard User Creation & Authentication */
export class User {
    static async testSuccess() {
        await begin_transaction();
        await commit_transaction();

        return 1;
    }

    static async testError() {
        await begin_transaction();
        await rollback_transaction();
        throw new ExpressError("Error Hit", 500);
    }

    /** Authenticate user with email & password. Returns user or throws error. */
    // static async authenticate(data) {
    //     const user = await fetch_user_by_user_email(data.email);

    //     if (user) {
    //     // compare hashed password to a new hash from password
    //     const isValid = await bcrypt.compare(data.password, user.password);
    //     if (isValid) {
    //         delete user.password;
    //         delete user.email;
    //         user.type = "user";
    //         return user;
    //     }
    //     }

    //     throw new ExpressError("Invalid Credentials", 401);
    // }
}