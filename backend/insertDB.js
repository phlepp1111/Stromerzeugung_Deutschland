import { db } from "./db.js";

async function insertDB() {
    let conn;
    try {
        conn = await db.pool.getConnection();
        const insertQuery =
            "INSERT INTO StromDaten.BraunkohleErzeugung(Timestamp_Unix, Menge) VALUES (?,?)";
        // console.log(db.pool);
        const params = [1, 1];
        const result = await conn.query(insertQuery, params);
        console.log(`Eintrag (id=${result.insertId}) eingetragen.`);
    } catch (error) {
        console.log(error);
    } finally {
        if (conn) return conn.end();
    }
}
insertDB();
// async function asyncFunction() {
//     let conn;
//     try {
//         conn = await pool.getConnection();
//         const rows = await conn.query("SELECT 1 as val");
//         console.log(rows); //[ {val: 1}, meta: ... ]
//         const res = await conn.query("INSERT INTO myTable value (?, ?)", [
//             1,
//             "mariadb",
//         ]);
//         console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//     } catch (err) {
//         throw err;
//     } finally {
//         if (conn) return conn.end();
//     }
// }
