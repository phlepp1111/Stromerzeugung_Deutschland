import fs from "fs";
async function getTimestamps(filter, resolution) {
    let timestamps = [];
    fetch(
        `https://www.smard.de/app/chart_data/${filter}/DE/index_${resolution}.json`
    )
        .then((response) => response.json())
        .then((data) => {
            data.timestamps.map((timestamp) => {
                timestamps.push(timestamp);
            });
        })
        .then(() => {
            console.log(timestamps);
            return timestamps;
        });
}

async function getTimeline(filter, resolution) {
    getTimestamps(filter, resolution).then((timestamps) => {
        console.log(timestamps);
    });
    // try {
    //     const timestamps = await getTimestamps(filter, resolution);
    //     for (let timestamp of timestamps) {
    //         const response = await fetch(
    //             `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_${resolution}_${timestamp}.json`
    //         );
    //         const data = await response.json();
    //         fs.writeFileSync("./data.json", JSON.stringify(data, null, 5));
    //     }
    //     console.log("done.");
    // } catch (error) {
    //     console.log(error);
    // }

    // let formattedData = data.series.map(([timestamp, value]) => {
    //     const formattedTimestamp = new Date(
    //         timestamp
    //     ).toLocaleString("de-DE");
    //     return { [formattedTimestamp]: value };
    // });
}

getTimeline(1223, "quarterhour");
