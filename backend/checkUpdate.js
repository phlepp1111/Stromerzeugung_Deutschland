import { db } from "./db.js";
import { getTimestamps } from "./getAllData.js";

async function checkUpdate() {
    let conn;
    let timestamps = await getTimestamps(410);
    for (let timestamp of timestamps) {
        try {
            conn = await db.pool.getConnection();
            let rows = await conn.query(
                `SELECT EXISTS(SELECT * FROM StromDaten.StromDaten WHERE Timestamp_Unix = ${timestamp});`
            );
            console.log(
                `rows for timestamp ${timestamp}: `,
                Object.values(rows[0])
            );
        } catch (error) {
            console.log(error);
        } finally {
            if (conn) conn.end();
        }
    }
}

checkUpdate();
