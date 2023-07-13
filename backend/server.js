import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

import SelectLast1000 from "./SelectLast1000Entries.js";
import SelectLastWeek from "./selectLastWeek.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
app.use(bodyParser.urlencoded({ extended: false }));

BigInt.prototype.toJSON = function () {
    return this.toString();
};

app.get("/", (req, res) => {
    console.log("received a get request");
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});
app.get("/lastgraph", async (req, res) => {
    try {
        console.log("received a get request at /lastgraph");
        const rows = await SelectLast1000();
        res.send(rows);
    } catch (error) {
        console.log(error);
    }
});
app.get("/lastweek", async (req, res) => {
    try {
        console.log("received a get request at /lastweek");
        const rows = await SelectLastWeek();
        res.send(rows);
    } catch (error) {
        console.log(error);
    }
});
app.get("/lastgreen", async (req, res) => {
    try {
        console.log("received a get request at /lastgreen");
        const rows = await SelectLastWeek();
        let greenArray = [];
        rows.forEach((object) => {
            let greenObject = {
                ID: object.ID,
                Timestamp_Unix: object.Timestamp_Unix,
                Verbrauch_Gesamt: object.Verbrauch_Gesamt,
                Verbrauch_Pumpspeicher: object.Verbrauch_Pumpspeicher,
                Erzeugung_Erneuerbar:
                    object.OffshoreWindErzeugung +
                    object.WasserkraftErzeugung +
                    object.Erzeugung_Sonstige_Erneuerbar +
                    object.OnshoreWindErzeugung +
                    object.BiomasseErzeugung +
                    object.PhotovoltaikErzeugung +
                    object.PumpspeicherErzeugung,
                Erzeugung_Konventionell:
                    object.BraunkohleErzeugung +
                    object.KernenergieErzeugung +
                    object.Erzeugung_Sonstige_Konventionell +
                    object.SteinkohleErzeugung +
                    object.ErdgasErzeugung,
            };
            greenArray.push(greenObject);
        });
        console.log(greenArray[500]);
        res.send(greenArray);
    } catch (error) {
        console.log(error);
    }
});
app.listen(process.env.PORT || 3002, function () {
    console.log("I'm listening on port 3002.");
});
