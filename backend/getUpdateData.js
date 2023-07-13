import fs from "fs";
import { filterName } from "./getAllData.js";
import { checkUpdate } from "./checkUpdate.js";

async function getUpdateData() {
    let updateData = {};
    let timestamps = await checkUpdate();
    for (let filter in filterName) {
        let filterData = [];
        for (let timestamp of timestamps) {
            let response = await fetch(
                `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_quarterhour_${timestamp}.json`
            );
            let data = await response.json();
            filterData = filterData.concat(data.series);
        }
        updateData[filterName[filter]] = filterData;
    }
    fs.writeFileSync(`./data/data_update.json`, JSON.stringify(updateData));
    console.log("data_update saved!");
}
// getUpdateData();
