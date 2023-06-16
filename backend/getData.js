import fs from "fs";
function getTimestamps(filter, resolution) {
    fetch(
        `https://www.smard.de/app/chart_data/${filter}/DE/index_${resolution}.json`
    )
        .then((answer) => answer.json())
        .then((data) => {
            console.log(data);
        });
}
// getTimestamps(410, 'hour');

function getTimeline(filter, resolution) {
    fetch(
        `https://www.smard.de/app/chart_data/${filter}/DE/${filter}_DE_${resolution}_1419807600000.json`
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
getTimeline(4068, "quarterhour");
