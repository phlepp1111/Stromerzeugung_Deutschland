import { db } from "./db.js";

export default async function SelectLastWeek() {
    const currentTimestamp = Date.now();

    const oneWeekAgoTimestamp = currentTimestamp - 7 * 24 * 60 * 60 * 1000;
    let conn;
    try {
        conn = await db.pool.getConnection();
        let rows = await conn.query(
            `SELECT * FROM StromDaten.StromDaten WHERE Timestamp_Unix > ${oneWeekAgoTimestamp} AND Verbrauch_Gesamt IS NOT NULL; `
        );
        conn.release();
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) conn.end();
    }
}
