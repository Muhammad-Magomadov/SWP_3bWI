import { Mannschaft } from "./Mannschaft/mannschaft.ts";
import { Spieler } from "./Spieler/spieler.ts";
import { Trainer } from "./Trainer/trainer.ts";

const spielerNamen = ["Max", "Lukas", "Tim", "Jonas", "Leon", "Felix"];
const spielerPositionen = ["Torwart", "Verteidiger", "Mittelfeldspieler", "Stürmer"];

const spieler = spielerNamen.map(
    (name, index) => new Spieler(name, spielerPositionen[index % spielerPositionen.length], index + 1)
);

const trainer = new Trainer("Herr Müller", 10, "A-Lizenz");
const mannschaft = new Mannschaft("FC Dornbirn", "Regionalliga", 0, spieler, [trainer]);

console.log(mannschaft.grundDaten());

mannschaft._spieler.forEach((spieler) => spieler.printdata());
mannschaft._trainer.forEach((trainer) => trainer.printdata());

const ersatzspieler = mannschaft.switchPlayer(spieler[0]);
console.log(`${spieler[0].name} kann nicht mehr spielen. Ersatzspieler: ${ersatzspieler.name}.`);
