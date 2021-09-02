import { db } from "../coreDB";
import { sql } from '@databases/pg'

export async function begin_transaction() {
    try {
        const result = await db.query(sql`BEGIN`);

        return result;
    } catch (error) {
        // throw new ExpressError(`An Error Occured: Unable to begin transaction - ${error}`, 500);
    };
};


export async function commit_transaction() {
    try {
        const result = await db.query(sql`COMMIT`);

        return result;
    } catch (error) {
        // throw new ExpressError(`An Error Occured: Unable to commit transaction - ${error}`, 500);
    };
};


export async function rollback_transaction() {
    try {
        const result = await db.query(sql`ROLLBACK`);

        return result;
    } catch (error) {
        // throw new ExpressError(`An Error Occured: Unable to rollback transaction - ${error}`, 500);
    };
};