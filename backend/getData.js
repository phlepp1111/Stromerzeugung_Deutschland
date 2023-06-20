import { response } from "express";
import fs from "fs";
async function getTimestamps(filter, resolution) {
    return fetch(
        `https://www.smard.de/app/chart_data/${filter}/DE/index_${resolution}.json`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data.timestamps);
            return data.timestamps;
        });
}

async function getTimeline(filter, resolution) {
    getTimestamps(filter, resolution).then((timestamps) => {
        console.log(timestamps);
        for (let timestamp of timestamps) {
            fetch(
                `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_${resolution}_${timestamp}.json`
            )
                .then((response) => response.json())
                .then((data) => {
                    fs.appendFileSync(
                        "./data.json",
                        JSON.stringify(data.series, null, 5)
                    );
                });
        }
        console.log("done.");
    });

    // let formattedData = data.series.map(([timestamp, value]) => {
    //     const formattedTimestamp = new Date(
    //         timestamp
    //     ).toLocaleString("de-DE");
    //     return { [formattedTimestamp]: value };
    // });
}

getTimeline(1223, "quarterhour");
