import { db } from "./db.js";
import { getTimestamps } from "./getAllData.js";

export async function checkUpdate() {
    let conn;
    let timestampsWithOne = [];
    let timestampsWithZero = [];
    let timestamps = await getTimestamps(410);
    for (let timestamp of timestamps) {
        try {
            conn = await db.pool.getConnection();
            let rows = await conn.query(
                `SELECT EXISTS(SELECT * FROM StromDaten.StromDaten WHERE Timestamp_Unix = ${timestamp});`
            );
            if (Object.values(rows[0])[0] === 1) {
                timestampsWithOne.push(timestamp);
            }
            if (timestampsWithOne.length > 2) {
                timestampsWithOne.shift();
            }
            if (Object.values(rows[0])[0] === 0) {
                timestampsWithZero.push(timestamp);
            }
        } catch (error) {
            console.log(error);
        } finally {
            if (conn) conn.end();
        }
    }
    console.log(timestampsWithOne);
    console.log(timestampsWithZero);
    let timestampsWithOneAndZero = timestampsWithOne.concat(timestampsWithZero);
    return timestampsWithOneAndZero;
}

// checkUpdate();
