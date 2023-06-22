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
    getTimestamps(filter).then((timestamps) => {
        for (let timestamp of timestamps) {
            fetch(
                `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_quarterhour_${timestamp}.json`
            )
                .then((response) => response.json())
                .then((data) => {
                    return insertDB(filtername, data.series);
                });
        }
    });

    // let formattedData = data.series.map(([timestamp, value]) => {
    //     const formattedTimestamp = new Date(
    //         timestamp
    //     ).toLocaleString("de-DE");
    //     return { [formattedTimestamp]: value };
    // });
}
