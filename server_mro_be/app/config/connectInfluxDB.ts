// https://www.influxdata.com/blog/getting-started-with-node-influx/#:~:text=Let%E2%80%99s%20take%20a%20look%20at%20the%20InfluxDB%20client,the%20browser%2C%20all%20without%20needing%20any%20extra%20dependencies.
// TODO::  This should eventually handle multiple servers
import { InfluxDB } from "influx";

export const influxDatabaseConnect = async (connectionString: string | undefined, logging: boolean = false) => {
    try {
        // 1---- Check if Broker Address has been defined, if not throw an error and exit.
		if (connectionString === undefined) {
			throw new Error("Influx Database Address not defined, please provide an address to initiate connection.");
		}

        // 2---- Attempt to initiate a connection to the MQTT broker.
		if (logging) {
			console.log("Initializing connection to Influx database.");
		}
        // 2---- Attempt to create a connection to the Influx Database.
        const db = await new InfluxDB(connectionString);
        return db;
    } catch (error) {
        console.log(error.stack);
		process.exit();
    }
}