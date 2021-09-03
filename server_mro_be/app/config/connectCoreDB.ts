// TODO: This should eventually handle multiple servers

import createConnectionPool from "@databases/pg";

export const coreDatabaseConnect = async (connectionString: string | undefined, logging: boolean = false) => {
    try {
        // 1---- Check if Broker Address has been defined, if not throw an error and exit.
		if (connectionString === undefined) {
			throw new Error("Core Database Address not defined, please provide an address to initiate connection.");
		}

        // 2---- Attempt to initiate a connection to the MQTT broker.
		if (logging) {
			console.log("Initializing connection to Core database.");
		}
        // 2---- Attempt to create a connection to the Core Postgres Database.
        const db = await createConnectionPool(connectionString);
        return db;
    } catch (error) {
        console.log(error.stack);
		process.exit();
    }
}

// export const dbMain = createConnectionPool(ADDR_MRO_CONFIG_DB1);