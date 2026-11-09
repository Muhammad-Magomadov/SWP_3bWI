import { Auto } from "../auto/auto.ts";

export class Parkplatz {
    private _anzahlPlaetze: number;
    private _name: string;
    private _ort: string;
    private _strasse: string;
    private _plz: string;
    private _kosten: number;
    private _dieAutos: Auto[] = [];

 
    constructor(aPlaetze:number, 
        name:string, 
        ort:string, 
        strasse:string, 
        plz:string, 
        kosten:number
    ){
        this._anzahlPlaetze = aPlaetze;
        this._name = name;
        this._ort = ort;
        this._strasse = strasse;
        this._plz = plz;
        this._kosten = kosten;
    }

    set anzahlPlaetze(platzA: number){
        this._anzahlPlaetze = platzA;
    }

    get anzahlPlaetze(): number{
        return this._anzahlPlaetze;
    }
    set name(nameA: string){
        this._name = nameA;
    }

    get name(): string{
        return this._name;
    }

    set ort(ortA: string){
        this._ort = ortA;
    }

    get ort(): string{
        return this._ort;
    }

    set strasse(strasseA: string){
        this._strasse = strasseA;
    }

    get strasse(): string{
        return this._strasse;
    }

    set plz(plzA: string){
        this._plz = plzA;
    }

    get plz(): string{
        return this._plz;
    }

    set kosten(kostenA: number){
        this._kosten = kostenA;
    }

    get kosten(): number{
        return this._kosten;
    }

    grundDaten() {
        return this.anzahlPlaetze + " " + this.name + " " + this.ort + " " + this.strasse + " " + this.plz + " " + this.kosten;
    }
    
    addAuto(auto: Auto) {
        if (this._dieAutos.length > this._anzahlPlaetze) {
            console.log("Ätsch Parkplatz voll, bitte WARTEN!")
        } else {
            this._dieAutos.push(auto);
        }
    }

    deleteAuto(auto: Auto) {
        if (this._dieAutos.length === 0) {
            console.log ("Parkplatz leer, kein Auto");
        } else {
            this._dieAutos.splice(this._dieAutos.indexOf(auto), 1);
        }
    }

    autoAufParkplatz() {
        this._dieAutos.forEach((auto) => {
            console.log(auto.printdata());
        });
    }
}