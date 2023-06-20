import { db } from "./db.js";

export default async function insertDB(table, timestamp, menge) {
    let conn;
    try {
        conn = await db.pool.getConnection();
        const insertQuery = `INSERT INTO StromDaten.${table}(Timestamp_Unix, Menge) VALUES (?,?)`;
        const params = [timestamp, menge];
        const result = await conn.query(insertQuery, params);
        console.log(`Eintrag (id=${result.insertId}) eingetragen.`);
        conn.release();
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) return conn.end();
    }
}
