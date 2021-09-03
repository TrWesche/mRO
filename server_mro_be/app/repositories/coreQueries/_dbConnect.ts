import { coreDatabaseConnect } from "../../config/connectCoreDB";
import { ADDR_MRO_CONFIG_DB1 } from "../../../configEnv";

export const coreDB = await(coreDatabaseConnect(ADDR_MRO_CONFIG_DB1, true));