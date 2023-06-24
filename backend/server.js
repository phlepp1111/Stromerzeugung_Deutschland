import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    console.log("received a get request");
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

app.listen(process.env.PORT || 3002, function () {
    console.log("I'm listening on port 3002.");
});
