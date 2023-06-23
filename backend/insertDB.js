import { db } from "./db.js";
import allData from "./data/data_All.json" assert { type: "json" };

const filterName = {
    1223: "BraunkohleErzeugung",
    1224: "KernenergieErzeugung",
    1225: "OffshoreWindErzeugung",
    1226: "WasserkraftErzeugung",
    1227: "Erzeugung_Sonstige_Konventionell",
    1228: "Erzeugung_Sonstige_Erneuerbar",
    4066: "BiomasseErzeugung",
    4067: "OnshoreWindErzeugung",
    4068: "PhotovoltaikErzeugung",
    4069: "SteinkohleErzeugung",
    4070: "PumpspeicherErzeugung",
    4071: "ErdgasErzeugung",
    410: "Verbrauch_Gesamt",
    4387: "Verbrauch_Pumpspeicher",
};
function createArrayFromJson(jsonString) {
    // const data = JSON.parse(jsonString);
    const result = [];

    for (const key in jsonString) {
        const keyValuePairs = jsonString[key];
        for (const [timestamp, value] of keyValuePairs) {
            let found = false;
            for (const arr of result) {
                if (arr[0] === timestamp) {
                    arr.push(value);
                    found = true;
                    break;
                }
            }
            if (!found) {
                result.push([timestamp, value]);
            }
        }
    }

    return result;
}

const output = createArrayFromJson(allData);
fs.writeFileSync(`./data/data_All_format.json`, JSON.stringify(output));

export default async function insertDB() {
    let conn;
    conn = await db.pool.getConnection();
    const insertQuery = `INSERT INTO StromDaten.StromDaten (
        Timestamp_Unix,
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
        Verbrauch_Gesamt,
        Verbrauch_Pumpspeicher)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    // const insertParams =

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
