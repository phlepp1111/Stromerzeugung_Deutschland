import insertDB from "./insertDB.js";

async function getTimestamps(filter) {
    return fetch(
        `https://www.smard.de/app/chart_data/${filter}/DE/index_quarterhour.json`
    )
        .then((response) => response.json())
        .then((data) => {
            return data.timestamps;
        });
}

export default async function getTimeline(filter, filtername) {
    let timestamps = await getTimestamps(filter);

    for (let timestamp of timestamps) {
        let response = await fetch(
            `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_quarterhour_${timestamp}.json`
        );
        let data = await response.json();
        console.log(data.series);
        await insertDB(filtername, data.series);
    }

    // let formattedData = data.series.map(([timestamp, value]) => {
    //     const formattedTimestamp = new Date(
    //         timestamp
    //     ).toLocaleString("de-DE");
    //     return { [formattedTimestamp]: value };
    // });
}
