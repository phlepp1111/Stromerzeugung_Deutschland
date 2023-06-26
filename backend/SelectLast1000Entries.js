import { db } from "./db.js";

export default async function SelectLast1000() {
    let conn;
    try {
        conn = await db.pool.getConnection();
        let rows = await conn.query(
            `SELECT * FROM StromDaten.StromDaten ORDER BY Timestamp_Unix DESC LIMIT 1000; `
        );
        for (let i = 0, len = rows.length; i < len; i++) {
            console.log(rows[i]);
        }
        conn.release();
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) return conn.end();
    }
}
SelectLast1000();
