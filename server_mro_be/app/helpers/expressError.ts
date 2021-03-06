/** ExpressError extends the normal JS error so we can easily
 *  add a status when we make an instance of it.
 *
 *  Since we are using JSONSchema and will return an array of
 *  errors we want to make sure we display that properly
 *  The error-handling middleware will return this.
 */

export class ExpressError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super();
        this.message = message;
        this.status = status;
        // console.error(this.stack);
    }
}
  