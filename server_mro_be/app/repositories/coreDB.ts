import { coreDatabaseConnect } from "../config/connectCoreDB";

export const db = await coreDatabaseConnect(true);