import fs from "fs";
function getTimestamps(filter, resolution) {
    fetch(
        `https://www.smard.de/app/chart_data/${filter}/DE/index_${resolution}.json`
    )
        .then((answer) => answer.json())
        .then((data) => {
            console.log(data.timestamps.length);
            // fs.writeFileSync(
            //     "./dataTimestamps1225.json",
            //     JSON.stringify(data, 5)
            // );
        });
}
getTimestamps(4387, "quarterhour");

function getTimeline(filter, resolution) {
    fetch(
        `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_${resolution}_1686520800000.json`
    )
        .then((answer) => answer.json())
        .then((data) => {
            let formattedData = data.series.map(([timestamp, value]) => {
                const formattedTimestamp = new Date(timestamp).toLocaleString(
                    "de-DE"
                );
                return { [formattedTimestamp]: value };
            });
            fs.writeFileSync("./data.json", JSON.stringify(formattedData, 5));
        });
}
// getTimeline(1223, "quarterhour");
