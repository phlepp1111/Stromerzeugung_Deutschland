import { db } from "./db.js";

export default async function insertDB(table, data) {
    let conn;
    try {
        // console.log("data:", data);
        conn = await db.pool.getConnection();
        const insertQuery = `INSERT INTO StromDaten.${table}(Timestamp_Unix, Menge) VALUES (?,?)`;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await conn.batch(insertQuery, data, (err, res, meta) => {
            if (err) {
                console.error("Error loading data, reverting changes: ", err);
            } else {
                console.log(res);
                console.log(meta);
            }
        });
        conn.release();
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) return conn.end();
    }
}
