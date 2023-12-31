import { db } from "./db.js";
import fs from "fs";

export async function insertUpdate() {
    const content = fs.readFileSync("./data/data_update_format.json", "utf8");
    const updateData = JSON.parse(content);
    let conn = await db.pool.getConnection();
    console.log("updating database");
    for (let data of updateData) {
        let insertQuery = `INSERT INTO StromDaten.StromDaten (
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
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        ON DUPLICATE KEY UPDATE
        Verbrauch_Gesamt = VALUES(Verbrauch_Gesamt),
        BraunkohleErzeugung = VALUES(BraunkohleErzeugung),
        KernenergieErzeugung = VALUES(KernenergieErzeugung),
        OffshoreWindErzeugung = VALUES(OffshoreWindErzeugung),
        WasserkraftErzeugung = VALUES(WasserkraftErzeugung),
        Erzeugung_Sonstige_Konventionell = VALUES(Erzeugung_Sonstige_Konventionell),
        Erzeugung_Sonstige_Erneuerbar = VALUES(Erzeugung_Sonstige_Erneuerbar),
        BiomasseErzeugung = VALUES(BiomasseErzeugung),
        OnshoreWindErzeugung = VALUES(OnshoreWindErzeugung),
        PhotovoltaikErzeugung = VALUES(PhotovoltaikErzeugung),
        SteinkohleErzeugung = VALUES(SteinkohleErzeugung),
        PumpspeicherErzeugung = VALUES(PumpspeicherErzeugung),
        ErdgasErzeugung = VALUES(ErdgasErzeugung),
        Verbrauch_Pumpspeicher = VALUES(Verbrauch_Pumpspeicher)`;

        await conn.query(insertQuery, data, (err, res, meta) => {
            if (err) {
                console.error("Error loading data, reverting changes: ", err);
            } else {
                console.log(res);
                console.log(meta);
            }
        });
    }
    conn.release();
    let done = "new data inserted";
    return done;
}
// insertUpdate();
