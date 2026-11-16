import { Mannschaft } from "./Mannschaft/mannschaft.ts";
import { Spieler } from "./Spieler/spieler.ts";
import { Trainer } from "./Trainer/trainer.ts";

const spielerNamen = [
    "Max", "Lukas", "Tim", "Jonas", "Leon", "Felix",
    "Paul", "David", "Elias", "Noah", "Benjamin", "Simon",
    "Julian", "Moritz", "Tobias", "Fabian", "Daniel", "Florian",
    "Matthias", "Philipp", "Alexander", "Sebastian"
];
const trainer = new Trainer("Herr Müller", 10, "A-Lizenz");

const mannschaft = new Mannschaft("FC Dornbirn", "Regionalliga", 0, 22, [], [trainer]);

const spielerPositionen = [
    "Torwart",
    "Innenverteidiger",
    "Linksverteidiger",
    "Rechtsverteidiger",
    "Defensiver Mittelfeldspieler",
    "Sechser",
    "Achter",
    "Zehner",
    "Linker Außenstürmer",
    "Rechter Außenstürmer",
    "Zentraler Stürmer",
];

console.log(mannschaft.grundDaten());

for (let i = 0; i < spielerNamen.length && i < spielerPositionen.length * 2; i++) {
    const position = spielerPositionen[Math.floor(i / 2)];
    const spieler = new Spieler(spielerNamen[i], position, i + 1);
    mannschaft.addSpieler(spieler);
    spieler.printdata();
}
