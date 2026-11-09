export class Mannschaft {
    constructor(
        public _name: string,
        public _liga: string,
        public _points: number
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

    printdata(): void {
        console.log(
            `Mannschaft data: Name: ${this._name}   Liga: ${this._liga}   Punkte: ${this._points}`
        );
    }
}