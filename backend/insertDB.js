import { db } from "./db.js";

export default async function insertDB(table, timestamp, menge) {
    let conn;
    try {
        conn = await db.pool.getConnection();
        const insertQuery = `INSERT INTO StromDaten.${table}(Timestamp_Unix, Menge) VALUES (${timestamp},${menge})`;
        const params = [1, 1];
        const result = await conn.query(insertQuery, params);
        console.log(`Eintrag (id=${result.insertId}) eingetragen.`);
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) return conn.end();
    }
}
