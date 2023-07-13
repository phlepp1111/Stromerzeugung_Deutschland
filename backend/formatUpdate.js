import updateData from "./data/data_update.json" assert { type: "json" };
import fs from "fs";
import { createArrayFromJson } from "./formatArray.js";

export async function formatUpdate() {
    const output = createArrayFromJson(updateData);
    fs.writeFileSync(`./data/data_update_format.json`, JSON.stringify(output));
    // console.log("data_update_format saved!");
    let done = "data_update_format saved!";
    return done;
}
// formatUpdate();
