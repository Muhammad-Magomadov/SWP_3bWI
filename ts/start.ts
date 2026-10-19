class Auto {
    private _marke: string ="";
    private _ps: number=0;
    private _farbe: string="rot";


    constructor(marke:string,ps:number,farbe:string) {
        this._marke = marke;
        this._farbe = farbe;
        this._ps = ps;
    }
    get marke(): string {
        return this._marke;
    }

    set 



    set farbe(value: string) {

    }

    printdata(): void {
        console.log("Auto data Farbe:"+this._farbe + " Marke:"+ this._marke + "PS: "+ this._ps);
    }
}
// Viele Autos in einem Array, ACHTUNG TYPE!!!
const autos : Auto[] = [];
const auto = new Auto();

const farbenA = ["Rot", "Blau", "Grün", "Gelb", "Schwarz", "Weiß"];
const markenA = ["BMW", "Audi", "Mercedes", "VW", "Porsche", "Opel"];

auto.marke = "BMW";
auto.ps = 34;
auto.printdata();
for(let i=0;i<10;i++) {
    //let auto = new Auto();
    //auto.farbe = farbenA[Math.floor(Math.random() * farbenA.length)];
    //auto.marke = markenA[Math.floor(Math.random() * markenA.length)];

    autos.push(new Auto(markenA[Math.floor(Math.random() * markenA.length)], 300, farbenA[Math.floor(Math.random() * farbenA.length)]));
}

autos.forEach((auto) => {
    auto.printdata();
});