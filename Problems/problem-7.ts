class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number{
        const currentYear = new Date().getFullYear()
        const carAge = currentYear - this.year;
        return carAge
    }






}

const car = new Car("Toyota", "CHR", 2019);
console.log(car.getCarAge());