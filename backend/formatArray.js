import allData from "./data/data_All.json" assert { type: "json" };
import fs from "fs";

export async function createArrayFromJson(jsonString) {
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

// const output = await createArrayFromJson(allData);
// fs.writeFileSync(`./data/data_All_format.json`, JSON.stringify(output));
// console.log("formatted array created");
