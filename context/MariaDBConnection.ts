import { createPool, Pool } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

let pool:Pool;
export const init = () =>{
    try{
        pool=createPool({
            host: process.env.MARIADB_HOST,
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_PASSWORD,
            database: process.env.MARIADB_DATABASE,
        });
        console.debug('MySql Adapter Pool generated successfully');
    }catch(error){
        console.error('[mysql.connector][init][Error]: ', error);
        throw new Error('failed to initialized pool');
    }
};
init();

export {pool}
