import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

import SelectLast1000 from "./SelectLast1000Entries.js";

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
        console.log(rows[0]);
        res.send(rows);
    } catch (error) {
        console.log(error);
    }
});
app.listen(process.env.PORT || 3002, function () {
    console.log("I'm listening on port 3002.");
});
