import { db } from "./db.js";

export default async function SelectLast4weeks() {
    const currentTimestamp = Date.now();

    const fourWeeksAgoTimestamp = currentTimestamp - 28 * 24 * 60 * 60 * 1000;
    let conn;
    try {
        conn = await db.pool.getConnection();
        let rows = await conn.query(
            `SELECT * FROM StromDaten.StromDaten WHERE Timestamp_Unix > ${fourWeeksAgoTimestamp} AND Verbrauch_Gesamt IS NOT NULL; `
        );
        conn.release();
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) conn.end();
    }
}
