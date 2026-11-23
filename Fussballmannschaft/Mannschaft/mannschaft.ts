import { Spieler } from "../Spieler/spieler.ts";
import { Trainer } from "../Trainer/trainer.ts";

export class Mannschaft {
    constructor(
        public _name: string,
        public _liga: string,
        public _points: number,
        public _anzahlSpieler: number,
        private _spieler: Spieler[] = [],
        private _trainer: Trainer[] = []
    ) {}

    get name(): string{
        return this._name;
    }
    
    set name(name:string){
        this._name = name;
    }

    get liga(): string{
        return this._liga;
    }

    set liga(liga:string){
        this._liga = liga;
    }

    get points(): number{
        return this._points;
    }

    set points(points:number){
        this._points = points;
    }  

    grundDaten() {
        return this._name + " " + this._liga + " " + this._points;
    }

    addSpieler(spieler: Spieler) {
        if (this._spieler.length >= this._anzahlSpieler) {
            console.log("Mannschaft ist voll")
        } else {
            this._spieler.push(spieler);
        }

    }

    addTrainer(trainer: Trainer) {
        if (this._trainer.length >= 1){
            console.log("Mannschaft hat bereits einen Trainer");
        } else {
            this._trainer.push(trainer);
        }
    }

    deleteSpieler(name: string) {
        const output = this._spieler.filter((s)=> s._name != name)
        if (output.length < this._spieler.length) {
            this._spieler = output
            console.log("Spieler wurde gelöscht")
        }
        else {
            console.log("niemand wurde gelöscht")
        }
    }


    searchSpieler(name: string) {
        const searchspieler = this._spieler.find((s) => s._name === name);
        if (searchspieler) {
            console.log("Spieler gefunden");
            console.log(searchspieler.printdata());
        } else {
            console.log("Spieler nicht gefunden");
        }
    }

    searchTrainer(name: string) {
        const searchtrainer = this._trainer.find((t) => t._name === name);
        if (searchtrainer) {
            console.log("Trainer gefunden");
            console.log(searchtrainer.printdata());
        } else {
            console.log("Trainer nicht gefunden");
        }
    }

    SpielerinMannschaft() {
        this._spieler.forEach((spieler) => {
            console.log(spieler.printdata());
        });
    }
}