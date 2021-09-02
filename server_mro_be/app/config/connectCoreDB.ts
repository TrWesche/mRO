import createConnectionPool from "@databases/pg";
import { ADDR_MRO_CONFIG_DB1 } from "../../configEnv";

export const coreDatabaseConnect = async (logging: boolean = false) => {
    try {
        // 1---- Check if Broker Address has been defined, if not throw an error and exit.
		if (ADDR_MRO_CONFIG_DB1 === undefined) {
			throw new Error("Core Database Address not defined, please provide an address to initiate connection.");
		}

        // 2---- Attempt to create a connection to the Core Postgres Database.
        const db = await createConnectionPool(ADDR_MRO_CONFIG_DB1);
        return db;
    } catch (error) {
        console.log(error.stack);
		process.exit();
    }
}

// export const dbMain = createConnectionPool(ADDR_MRO_CONFIG_DB1);