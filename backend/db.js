import mariadb from "mariadb";
import secrets from "../secrets.json" assert { type: "json" };

const db = Object.freeze({
    pool: mariadb.createPool({
        host: secrets.mariaDB.host,
        port: secrets.mariaDB.port,
        user: secrets.mariaDB.user,
        password: secrets.mariaDB.password,
        connectionLimit: 50,
        connectTimeout: 10000,
    }),
});
export { db };
