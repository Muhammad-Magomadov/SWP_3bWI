import { Spieler } from "../Spieler/spieler.ts";

export class Trainer {
    private _name: string;
    private _erfahrung: number
    private _lizenz: string;


    constructor(
        name: string,
        erfahrung: number,
        lizenz: string
    ){
    this._name = name;
    this._erfahrung = erfahrung;
    this._lizenz = lizenz;
    }


    get name(): string {
        return this._name;
    }
    set name(name:string){
        this._name = name;
    }
 
    get erfahrung(): number {
        return this._erfahrung;
    }
    set erfahrung(erfahrung:number){
        this._erfahrung = erfahrung;
    }

    get lizenz(): string {
        return this._lizenz;
    }
    set lizenz(lizenz:string){
        this._lizenz = lizenz;
    }

    printdata(): void {
        console.log(
            `Trainer data: Name: ${this._name}   Erfahrung: ${this._erfahrung} Jahre   Lizenz: ${this._lizenz}`
        );
    }
}