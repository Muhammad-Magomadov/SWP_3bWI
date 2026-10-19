export class Auto {
    constructor(
        public _marke: string,
        public _ps: number,
        public _farbe: string,
    ) {}

    get marke(): string {
        return this._marke;
    }
    set marke(marke:string){
        this._marke = marke;
    }

    get ps(): number {
        return this._ps;
    }

    set ps(ps:number){
        this._ps = ps;
    }

    get farbe(): string {
        return this._farbe;
    }
    set farbe(farbe:string){
        this._farbe = farbe;
    }


    printdata(): void {
        console.log(
            `Auto data: Farbe: ${this._farbe}   Marke: ${this._marke}   PS: ${this._ps}`
        );
    }
}


