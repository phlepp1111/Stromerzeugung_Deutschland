import fs from "fs";
const filterName = {
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
    410: "Verbrauch_Gesamt",
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
    for (let filter in filterName) {
        let timestamps = await getTimestamps(filter);
        let filterData = [];
        for (let timestamp of timestamps) {
            let response = await fetch(
                `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_quarterhour_${timestamp}.json`
            );
            let data = await response.json();
            console.log(data.series);
            filterData = filterData.concat(data.series);
            // await insertDB(filtername, data.series, first);
            // fs.writeFileSync(
            //     `./data/data_${filterName}.json`,
            //     JSON.stringify(allData)
            // );
        }
        allData[filterName[filter]] = filterData;
        console.log(allData);
    }
    fs.writeFileSync(`./data/data_All.json`, JSON.stringify(allData));

    // export default async function getTimeline(filter, filtername, first) {
    //     let timestamps = await getTimestamps(filter);
    //     let allData = [];
    //     for (let timestamp of timestamps) {
    //         let response = await fetch(
    //             `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_quarterhour_${timestamp}.json`
    //         );
    //         let data = await response.json();
    //         console.log(data.series);
    //         allData = allData.concat(data.series);
    //         // await insertDB(filtername, data.series, first);
    //         fs.writeFileSync(
    //             `./data/data_${filtername}.json`,
    //             JSON.stringify(allData)
    //         );
    //     }

    // let formattedData = data.series.map(([timestamp, value]) => {
    //     const formattedTimestamp = new Date(
    //         timestamp
    //     ).toLocaleString("de-DE");
    //     return { [formattedTimestamp]: value };
    // });
}
getTimeline();
