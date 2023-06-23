import { db } from "./db.js";

export default async function SelectFromDB(table) {
    let conn;
    try {
        conn = await db.pool.getConnection();
        let rows = await conn.query(`SELECT * FROM StromDaten.${table}`);
        for (let i = 0, len = rows.length; i < len; i++) {
            console.log(rows[i].Timestamp_Unix);
        }
        conn.release();
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) return conn.end();
    }
}
SelectFromDB("WasserkraftErzeugung");
