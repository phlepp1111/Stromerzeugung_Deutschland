import { getUpdateData } from "./getUpdateData.js";
import { formatUpdate } from "./formatUpdate.js";
import { insertUpdate } from "./insertUpdateDB.js";

export async function updateDB() {
    let update1 = await getUpdateData();
    console.log(update1);
    let update2 = await formatUpdate();
    console.log(update2);
    let update3 = await insertUpdate();
    console.log(update3);
    let done = { done: "Database successfully updated" };
    return done;
}
//updateDB();
