import fs from "fs";
import cliProgress from "cli-progress";
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const filterName = {
    410: "Verbrauch_Gesamt",
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
    4387: "Verbrauch_Pumpspeicher",
};

async function getTimestamps(filter) {
    return fetch(
        `https://www.smard.de/app/chart_data/${filter}/DE/index_quarterhour.json`
    )
        .then((response) => response.json())
        .then((data) => {
            return data.timestamps;
        });
}

export default async function getTimeline() {
    let allData = {};
    let barProgress = 0;
    bar1.start(140, 0);
    for (let filter in filterName) {
        let timestamps = await getTimestamps(filter);
        let filterData = [];
        for (let timestamp of timestamps) {
            let response = await fetch(
                `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_quarterhour_${timestamp}.json`
            );
            let data = await response.json();
            filterData = filterData.concat(data.series);
        }
        allData[filterName[filter]] = filterData;
        barProgress = barProgress + 10;
        bar1.update(140, barProgress);
    }
    fs.writeFileSync(`./data/data_All.json`, JSON.stringify(allData));
    bar1.stop();
}
getTimeline();
