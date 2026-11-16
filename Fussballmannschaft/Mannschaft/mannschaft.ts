import { Spieler } from "../Spieler/spieler.ts";
import { Trainer } from "../Trainer/trainer.ts";

export class Mannschaft {
    constructor(
        public _name: string,
        public _liga: string,
        public _points: number,
        public _spieler: Spieler[] = [],
        public _trainer: Trainer[] = []
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

    switchPlayer(spieler: Spieler): Spieler {
        const index = this._spieler.indexOf(spieler);
        return this._spieler[(index + 1) % this._spieler.length];
    }





}