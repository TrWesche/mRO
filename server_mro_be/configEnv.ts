import 'dotenv/config';
import { env } from 'process';

export const PORT = +env.PORT! || 5000;
export const RUNTIME_ENV = env.RUNTIME_ENV;
export const DBMAIN_CONNECT_STR1 = env.DBMAIN_CONNECT_STR1;