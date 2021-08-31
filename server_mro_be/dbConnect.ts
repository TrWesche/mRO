import createConnectionPool from "@databases/pg";
import { DBMAIN_CONNECT_STR1 } from "./configEnv";

export const dbMain = createConnectionPool(DBMAIN_CONNECT_STR1);