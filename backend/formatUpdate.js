import fs from "fs";
import { createArrayFromJson } from "./formatArray.js";

export async function formatUpdate() {
    const content = fs.readFileSync("./data/data_update.json", "utf8");
    const updateData = JSON.parse(content);
    console.log("formatting update data");
    const output = await createArrayFromJson(updateData);
    fs.writeFileSync(`./data/data_update_format.json`, JSON.stringify(output));
    // console.log("data_update_format saved!");
    let done = "data_update_format saved!";
    return done;
}
// formatUpdate();
