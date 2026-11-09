export class spieler {
    constructor(
        public _name: string,
        public _position: string,
        public _trikotnummer: number,
    ) {}

    get name(): string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }

    get position(): string{
        return this._position;
    }  

    set position(position:string){
        this._position = position;
    }

    get trikotnummer(): number{
        return this._trikotnummer;
    }

    set trikotnummer(trikotnummer:number){
        this._trikotnummer = trikotnummer;
    }

    printdata(): void {
        console.log(
            `Spieler data: Name: ${this._name}   Position: ${this._position}   Trikotnummer: ${this._trikotnummer}`
        );
    }

}