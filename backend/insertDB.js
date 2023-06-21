import { db } from "./db.js";

export default async function insertDB(table, data) {
    let conn;
    try {
        conn = await db.pool.getConnection();
        const insertQuery = `INSERT INTO StromDaten.${table}(Timestamp_Unix, Menge) VALUES (?,?)`;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const result = await conn.batch(insertQuery, data);
        conn.release();
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) return conn.end();
    }
}
