// TODO:: This should eventually handle multiple servers
import MQTT from "async-mqtt";
import {
    ADDR_MQTT_BROKER1
} from "../../configEnv";

export const mqttConnectClient = async (logging: boolean = false) => {
	try {
		// 1---- Check if Broker Address has been defined, if not throw an error and exit.
		if (ADDR_MQTT_BROKER1 === undefined) {
			throw new Error("MQTT Broker Address not defined, please provide an address to initiate connection.");
		}

		// 2---- Attempt to initiate a connection to the MQTT broker.
		if (logging) {
			console.log("Initializing connection to MQTT broker.");
		}
		const client = await MQTT.connect(ADDR_MQTT_BROKER1);
		return client;
	} catch (error) {
		console.log(error.stack);
		process.exit();
	}
}

export const mqttPublish = async (client: MQTT.AsyncClient, topic: string, message: string | Buffer, logging: boolean = false) => {
	try {
		// 1---- Initiate Transaction with the MQTT Broker
		if (logging) {
			console.log("Transaction Started");
			console.log(`Topic = ${topic}`);
			console.log(`Message = ${message}`);
		}

		await client.publish(topic, message);
		// This line doesn't run until the server responds to the publish
		await client.end();
		// This line doesn't run until the client has disconnected without error
		if (logging) {
			console.log("Transaction Complete");
		}
	} catch (error) {
		// Do something about it!
		console.log(error.stack);
		process.exit();
	}
}





// When passing async functions as event listeners, make sure to have a try catch block

// const doStuff = async () => {
// 	console.log("Starting");
// 	try {
// 		await client.publish("wow/so/cool", "It works!");
// 		// This line doesn't run until the server responds to the publish
// 		await client.end();
// 		// This line doesn't run until the client has disconnected without error
// 		console.log("Done");
// 	} catch (e){
// 		// Do something about it!
// 		console.log(e.stack);
// 		process.exit();
// 	}
// }

// client.on("connect", doStuff);