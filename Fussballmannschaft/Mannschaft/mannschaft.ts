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

    deleteSpieler(spieler: Spieler) {
            if (this._spieler.length === 0) {
                console.log ("Mannschaft leer, keine Spieler");
            } else {
                this._spieler.splice(this._spieler.indexOf(spieler), 1);
            }
        }

    SpielerinMannschaft() {
        this._spieler.forEach((spieler) => {
            console.log(spieler.printdata());
        });
    }
}