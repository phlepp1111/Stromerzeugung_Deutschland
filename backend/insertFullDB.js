import getTimeline from "./getData.js";
const filterName = {
    1223: "BraunkohleErzeugung",
    // 1224: "KernEnergieErzeugung",
    // 1225: "OffshoreWindErzeugung",
    // 1226: "WasserkraftErzeugung",
    // 1227: "Erzeugung_Sonstige_Konventionell",
    // 1228: "Erzeugung_Sonstige_Erneuerbar",
    // 4066: "BiomasseErzeugung",
    // 4067: "OnshoreWindErzeugung",
    // 4068: "PhotovoltaikErzeugung",
    // 4069: "SteinkohleErzeugung",
    // 4070: "PumpspeicherErzeugung",
    // 4071: "ErdgasErzeugung",
    // 410: "Verbrauch_Gesamt",
    // 4387: "Verbrauch_Pumpspeicher",
};
for (let filter in filterName) {
    await getTimeline(filter, filterName[filter]).then(() =>
        console.log(`JOB DONE for ${filterName[filter]}`)
    );
}
