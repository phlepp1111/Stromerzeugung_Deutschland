import { db } from "./db.js";

export default async function SelectLast1000() {
    let conn;
    try {
        conn = await db.pool.getConnection();
        let rows = await conn.query(
            `SELECT * FROM StromDaten.StromDaten WHERE Verbrauch_Gesamt IS NOT NULL ORDER BY Timestamp_Unix DESC LIMIT 1000 ; `
        );
        conn.release();
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) conn.end();
    }
}
