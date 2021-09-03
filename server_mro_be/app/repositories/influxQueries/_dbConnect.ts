import { influxDatabaseConnect } from "../../config/connectInfluxDB";
import { ADDR_INFLUX_DATALOG_DB1 } from "../../../configEnv";

export const influxDB = await(influxDatabaseConnect(ADDR_INFLUX_DATALOG_DB1, true));