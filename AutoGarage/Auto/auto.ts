export class Auto{
    constructor(
        public marke: string,
        public ps: number,
        public farbe: string,
    ){}

    printdata(): void{
        console.log(`Auto data: Farbe: ${this.farbe}   Marke: ${this.marke}   PS: ${this.ps} `);
    }

    
}
