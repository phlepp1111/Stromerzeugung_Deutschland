export async function calculateAverageBestTime(greenArray) {
    const dataByDay = {};

    greenArray.forEach((object) => {
        const timestamp = object.Timestamp_Unix;
        const date = new Date(Number(timestamp));
        const day = date.toISOString().split("T")[0];

        if (!dataByDay[day]) {
            dataByDay[day] = {
                highestPercentage: 0,
                zeitHighest: 0,
            };
        }

        const totalAmount =
            object.Erzeugung_Erneuerbar + object.Erzeugung_Konventionell;
        const percentageErneuerbar =
            (object.Erzeugung_Erneuerbar / totalAmount) * 100;

        if (percentageErneuerbar > dataByDay[day].highestPercentage) {
            dataByDay[day].highestPercentage = percentageErneuerbar;
            dataByDay[day].zeitHighest = date
                .toISOString()
                .slice(11, 16)
                .replace("T", " ");
        }
    });
    const timesArray = Object.values(dataByDay).map((item) => item.zeitHighest);
    console.log("timesarray: ", timesArray);
    const averageTime = getAverageTime(timesArray);
    console.log("averageTime: ", averageTime);
    return averageTime;
}
function getAverageTime(times) {
    const totalMilliseconds = times.reduce((acc, curr) => {
        const [hours = 0, minutes = 0] = curr.split(":");
        return (
            acc + Number(hours) * 60 * 60 * 1000 + Number(minutes) * 60 * 1000
        );
    }, 0);

    const avgMilliseconds = totalMilliseconds / times.length;
    const avgDate = new Date(avgMilliseconds);

    const avgHours = avgDate.getUTCHours().toString().padStart(2, "0");
    const avgMinutes = avgDate.getUTCMinutes().toString().padStart(2, "0");

    const avgTime = `${avgHours}:${avgMinutes}`;
    return avgTime;
}
