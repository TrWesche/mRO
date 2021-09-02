import createConnectionPool from "@databases/pg";
import { ADDR_MRO_CONFIG_DB1 } from "../../configEnv";

export const dbMain = createConnectionPool(ADDR_MRO_CONFIG_DB1);