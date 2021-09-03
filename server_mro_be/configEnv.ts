import 'dotenv/config';
import { env } from 'process';

// Core Service & Database Setup
export const PORT = +env.PORT! || 5000;
export const RUNTIME_ENV = env.RUNTIME_ENV;
export const ADDR_MRO_CONFIG_DB1 = env.ADDR_MRO_CONFIG_DB1;

// Influx Database Enable & Connection Parameters
export const EN_INFLUX_DB1 = env.EN_INFLUX_DB1;
export const ADDR_INFLUX_DATALOG_DB1 = env.ADDR_INFLUX_DATALOG_DB1;

// MQTT Broker Enable & Connection Parameters
export const EN_MQTT_BROKER1 = env.EN_MQTT_BROKER1;
export const ADDR_MQTT_BROKER1 = env.ADDR_MQTT_BROKER1_NOAUTH;