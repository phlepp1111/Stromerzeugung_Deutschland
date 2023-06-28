import { db } from "./db.js";
import allData from "./data/data_All_format.json" assert { type: "json" };

export default async function insertDB() {
    let conn;
    conn = await db.pool.getConnection();
    const insertQuery = `INSERT INTO StromDaten.StromDaten (
        Timestamp_Unix,
        Verbrauch_Gesamt,
        BraunkohleErzeugung,
        KernenergieErzeugung,
        OffshoreWindErzeugung,
        WasserkraftErzeugung,
        Erzeugung_Sonstige_Konventionell, 
        Erzeugung_Sonstige_Erneuerbar,
        BiomasseErzeugung, 
        OnshoreWindErzeugung, 
        PhotovoltaikErzeugung,
        SteinkohleErzeugung,
        PumpspeicherErzeugung,
        ErdgasErzeugung,
        Verbrauch_Pumpspeicher)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    await conn.batch(insertQuery, allData, (err, res, meta) => {
        if (err) {
            console.error("Error loading data, reverting changes: ", err);
        } else {
            console.log(res);
            console.log(meta);
        }
    });
    conn.release();
    console.log("all inserted");
    // let conn;
    // if (first === true) {
    //     try {
    //         conn = await db.pool.getConnection();
    //         const insertQuery = `INSERT INTO StromDaten.StromDaten (Timestamp_Unix, ${column}) VALUES (?,?)`;
    //         await conn.batch(insertQuery, data, (err, res, meta) => {
    //             if (err) {
    //                 console.error(
    //                     "Error loading data, reverting changes: ",
    //                     err
    //                 );
    //             } else {
    //                 console.log(res);
    //                 console.log(meta);
    //             }
    //         });
    //         conn.release();
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         if (conn) return conn.end();
    //     }
    // } else if (first === false) {
    //     try {
    //         conn = await db.pool.getConnection();
    //         const updateQuery = `UPDATE StromDaten.StromDaten SET ${column} = ? WHERE Timestamp_Unix = ?`;
    //         const updateParams = data.map((row) => [row[1], row[0]]);

    //         await conn.batch(updateQuery, updateParams, (err, res, meta) => {
    //             if (err) {
    //                 console.error(
    //                     "Error loading data, reverting changes:",
    //                     err
    //                 );
    //             } else {
    //                 console.log(res);
    //                 console.log(meta);
    //             }
    //         });
    //         console.log("Batch update completed successfully.");
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         if (conn) return conn.end();
    //     }
    // }

    // try {
    //     conn = await db.pool.getConnection();
    //     const insertQuery = `INSERT INTO StromDaten.${table}(Timestamp_Unix, Menge) VALUES (?,?)`;
    //     await conn.batch(insertQuery, data, (err, res, meta) => {
    //         if (err) {
    //             console.error("Error loading data, reverting changes: ", err);
    //         } else {
    //             console.log(res);
    //             console.log(meta);
    //         }
    //     });
    //     conn.release();
    // } catch (error) {
    //     console.log(error);
    // } finally {
    //     if (conn) return conn.end();
    // }
}
insertDB();
