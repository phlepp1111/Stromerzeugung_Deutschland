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
            let formattedData = data.series.map(([timestamp, value]) => [
                new Date(timestamp).toLocaleString("de-DE"),
                value,
            ]);
            console.log(formattedData);
        });
}
getTimeline(4068, "quarterhour");
