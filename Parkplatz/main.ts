import { Auto } from "./auto/auto.ts";
import { Parkplatz } from "../Parkplatz/parkplatz/parkplatz.ts";

const farbenA = ["Rot", "Blau", "Grün", "Gelb", "Schwarz", "Weiß"];
const markenA = ["BMW", "Audi", "Mercedes", "VW", "Porsche", "Opel"];

const parkplatz = new Parkplatz(
    100,
    "Parkplatz A",
    "Dornbirn",
    "Hauptstraße 1",
    "6850",
    2.5,
);
console.log(parkplatz.grundDaten());
let anzahlAutos = 5;
const autos: Auto[] = [];

for (let i = 0; i < anzahlAutos; i++) {
    autos.push(
        new Auto(
            markenA[Math.floor(Math.random() * markenA.length)],
            Math.floor(Math.random() * 350) + 1,
            farbenA[Math.floor(Math.random() * farbenA.length)],
        ),
    );
}

for (let i = 0; i < autos.length; i++) {
    autos[i].printdata();
}

autos.forEach((auto) => {
    parkplatz.addAuto(auto);
    auto.printdata();
});


