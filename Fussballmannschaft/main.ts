import { Mannschaft } from "./Mannschaft/mannschaft.ts";
import { Spieler } from "./Spieler/spieler.ts";
import { Trainer } from "./Trainer/trainer.ts";

// Namen, die den Spielern der Reihe nach zugewiesen werden.
const spielerNamen = [
    "Max", "Lukas", "Tim", "Jonas", "Leon", "Felix",
    "Paul", "David", "Elias", "Noah", "Benjamin", "Simon",
    "Julian", "Moritz", "Tobias", "Fabian", "Daniel", "Florian",
    "Matthias", "Philipp", "Alexander", "Sebastian"
];
const trainer = new Trainer("Herr Müller", 10, "A-Lizenz");

// Die Mannschaft hat Platz für 22 Spieler.
const mannschaft = new Mannschaft("FC Dornbirn", "Regionalliga", 0, 22, [], [trainer]);

// Jede Position wird an genau zwei Spieler vergeben.
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

// Für jede Position werden zwei Spieler erstellt. Sind keine Namen oder Positionen mehr frei, stoppt die Schleife.
for (let i = 0; i < spielerNamen.length && i < spielerPositionen.length * 2; i++) {
    // Math.floor(i / 2) sorgt dafür, dass jeweils zwei Spieler dieselbe Position erhalten.
    const position = spielerPositionen[Math.floor(i / 2)];
    const spieler = new Spieler(spielerNamen[i], position, i + 1);
    mannschaft.addSpieler(spieler);
    // Gibt Name, Position und Trikotnummer in der Debug Console aus.
    spieler.printdata();
}
